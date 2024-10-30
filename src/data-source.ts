import { join } from 'path'
import { ColumnType, DataSource, DataSourceOptions } from 'typeorm'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const host = process.env.DATABASE_HOST
const port = parseInt(process.env.DATABASE_PORT)
const username = process.env.DATABASE_USERNAME
const password = process.env.DATABASE_PASSWORD
const dbName = process.env.DATABASE_NAME

const options: DataSourceOptions = {
  type: process.env.DATABASE_TYPE as any,
  host,
  port,
  username,
  password,
  database: dbName,
  entities: [join(__dirname, '/**/entities/*{.ts,.js}')],
  subscribers: [join(__dirname, '/**/subscribers/*{.ts,.js}')],
  migrations: [join(__dirname, '/**/migrations/*.ts')],
  cache: {
    type: 'database',
    tableName: '_cache'
  },
  synchronize: false,
  useUTC: true,
  timezone: '+00:00',
  extra: {
    supportBigNumbers: true,
    bigNumberStrings: false
  }
}
const dataSource = new DataSource(options)
const driver = dataSource.driver as unknown as typeof dataSource.driver & {
  oldNormalizeType: typeof dataSource.driver.normalizeType
}
driver.oldNormalizeType = driver.normalizeType
driver.normalizeType = (column: { type: ColumnType; length?: number | string; precision?: number | null; scale?: number }): string => {
  if (column.type === 'uuid') {
    column.length = 50
    return 'varchar'
  }
  return driver.oldNormalizeType(column)
}
void dataSource.initialize().then(async () => {
  if (dataSource.isInitialized) {
    if (process.env.DATABASE_TYPE === 'postgres') {
      try {
        await dataSource.query('ALTER USER ' + username + ' SET timezone="+00:00"')
      } catch {}
      try {
        await dataSource.query('ALTER DATABASE ' + dbName + ' SET timezone="+00:00"')
      } catch {}
    } else if (process.env.DATABASE_TYPE === 'mysql') await dataSource.query("SET time_zone = '+00:00';")
    else if (process.env.DATABASE_TYPE === 'mariadb') await dataSource.query("SET time_zone = '+00:00';")
  }
})

export { dataSource }

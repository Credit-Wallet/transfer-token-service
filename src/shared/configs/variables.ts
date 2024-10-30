export interface IVariables {
  port: number
  jwt: IJwt
  database: IDatabase
  imageUrl: string
  isProduction: boolean
}

export interface IJwt {
  key: string
  expires: string | number
  type: string
}

export interface IDatabase {
  host: string
  port: number
  username: string
  password: string
  dbName: string
}

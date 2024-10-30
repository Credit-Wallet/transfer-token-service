import { join } from 'path'
import { FsCacheStore } from '../services/cache.store'
import { diskStorage } from 'multer'

const CoreConfig = () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT) || 3306,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dbName: process.env.DATABASE_NAME
  },
  jwt: {
    key: process.env.JWT_SECRET_KEY,
    expires: process.env.JWT_EXPIRES_IN,
    type: 'Bearer'
  },
  imageUrl: process.env.IMAGE_URL,
  isProduction: process.env.NODE_ENV == 'production',
  cache: {
    store: new FsCacheStore({
      path: join(global.STORAGE_PATH, 'cache'),
      ttl: 60 * 60,
      maxsize: 100 * 1000 * 1000,
      zip: true
    }),
    preventfill: true
  },
  fallbackLanguage: 'en'
})
export default CoreConfig

export const storeConfig = (folder: string) => diskStorage({
  destination : `storages/uploads/${folder}`,
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + file.originalname
    cb(null, uniqueSuffix)
  }
})

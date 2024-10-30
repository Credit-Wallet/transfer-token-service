import * as fs from 'fs'
import * as path from 'path'

/*BEGIN: SETUP GLOBAL PATH*/
global.STORAGE_PATH = path.join(__dirname, '..', 'storages')
global.UPLOAD_PATH = path.join(__dirname, '..', 'storages', 'uploads')
if (!fs.existsSync(global.UPLOAD_PATH)) fs.mkdirSync(global.UPLOAD_PATH, { recursive: true })
/*END: SETUP GLOBAL PATH*/

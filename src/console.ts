import { BootstrapConsole } from 'nestjs-console'
import './begin.config'
import { ConsoleModule } from './console.module'

const bootstrap = new BootstrapConsole({
  module: ConsoleModule,
  useDecorators: true
})
Reflect.defineMetadata('design:isConsole', true, global)
bootstrap.init().then(async (app) => {
  try {
    await app.init()
    await bootstrap.boot()
    await app.close()
  } catch (e) {
    console.error(e)
    await app.close()
    process.exit(1)
  }
})

import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { globSync } from 'glob'
import { ConsoleModule as BaseConsoleModule } from 'nestjs-console'
import { basename } from 'path'
import { AppModule } from './app.module'
import { GlobalModule } from './global.module'
import CoreConfig from './shared/configs/config'
import { HookModule } from './shared/hook/hook.module'
import { MomentService } from './shared/services/moment.service'

const listCommands = []
if (basename(__filename) == 'console.module.ts') {
  globSync('src/**/*.command.ts').forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const command = require(`../${file}`)
    listCommands.push(...Object.values(command))
  })
} else {
  globSync('dist/**/*.command.js').forEach((file) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const command = require(`../${file}`)
    listCommands.push(...Object.values(command))
  })
}

@Module({
  imports: [
    HookModule.forRoot(),
    ConfigModule.forRoot({
      load: [CoreConfig],
      expandVariables: true,
      isGlobal: true
    }),
    BaseConsoleModule,
    GlobalModule,
    AppModule
  ],
  providers: [...listCommands, MomentService],
  exports: [...listCommands]
})
export class ConsoleModule {}

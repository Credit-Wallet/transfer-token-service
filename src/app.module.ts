import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ScheduleModule } from '@nestjs/schedule'
import { ServeStaticModule } from '@nestjs/serve-static'
import { GlobalModule } from 'src/global.module'
import { TransferModule } from './modules/transfer/transfer.module'
import CoreConfig from './shared/configs/config'
import { HookModule } from './shared/hook/hook.module'
import { AuthModule } from './modules/auth.module';

@Module({
  imports: [
    HookModule.forRoot(),
    ServeStaticModule.forRootAsync({
      useFactory: () => {
        return [
          {
            rootPath: global.UPLOAD_PATH,
            serveRoot: '/uploads'
          }
        ]
      }
    }),
    ConfigModule.forRoot({
      load: [CoreConfig],
      expandVariables: true,
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    GlobalModule,
    TransferModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}

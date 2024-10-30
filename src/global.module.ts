import { CacheModule, CacheModuleOptions } from '@nestjs/cache-manager'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { JwtModule } from '@nestjs/jwt'
import { StoreConfig } from 'cache-manager'
import { AcceptLanguageResolver, HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n'
import { join } from 'path'
import 'src/begin.config'
import CoreConfig from './shared/configs/config'
import { PaginationInterceptor } from './shared/interceptors/pagination.interceptor'
import { MomentService } from './shared/services/moment.service'

// console.log('global.STORAGE_PATH :>> ', global.STORAGE_PATH)
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [CoreConfig],
      expandVariables: true,
      isGlobal: true
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory(configService: ConfigService) {
        return configService.get<CacheModuleOptions<StoreConfig>>('cache')
      },
      inject: [ConfigService]
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.getOrThrow('fallbackLanguage'),
        loaderOptions: {
          path: join(global.STORAGE_PATH, '/i18n/'),
          watch: true
        }
      }),
      resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver, new HeaderResolver(['x-locale'])],
      inject: [ConfigService]
    }),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          global: true,
          secret: config.get<string>('jwt.key'),
          signOptions: {
            expiresIn: config.get<string | number>('jwt.expires')
          }
        }
      },
      inject: [ConfigService]
    })
  ],
  providers: [
    MomentService,
    {
      provide: APP_INTERCEPTOR,
      useClass: PaginationInterceptor
    }
  ],
  exports: [MomentService, CacheModule, I18nModule, JwtModule]
})
export class GlobalModule {}

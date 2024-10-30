import { ConfigService } from '@nestjs/config'
import { HttpAdapterHost, NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { IVariables } from './shared/configs/variables'
import { ValidationPipe } from './shared/pipes/validation.pipe'
import './begin.config'
import { GlobalException } from './shared/exceptions/global.exception'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next()
  })

  app.enableCors({
    allowedHeaders: '*',
    origin: '*'
  })

  const httpAdapter = app.get(HttpAdapterHost)
  app.useGlobalFilters(new GlobalException(httpAdapter))

  app.useGlobalPipes(ValidationPipe())

  const configService = app.get(ConfigService<IVariables>)

  if (!configService.get('isProduction', { infer: true })) {
    const config = new DocumentBuilder()
      .setVersion('1.0')
      .setTitle('Api Document')
      .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Token after login',
        in: 'header'
      })
      .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('docs', app, document, {
      swaggerOptions: {
        persistAuthorization: true
      }
    })
  }

  await app.listen(configService.get('port', '0.0.0.0', { infer: true })).then((value: any) => {
    console.log('Server Started at port: ' + configService.get('port', { infer: true }))
  })
}

bootstrap().then()

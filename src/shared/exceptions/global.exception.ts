import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { HttpAdapterHost } from '@nestjs/core'
import { StatusCode } from 'src/shared/configs/status.code'
import { ErrorPayloadDto } from '../dto/error.payload.dto'

@Catch()
export class GlobalException implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost

    const ctx = host.switchToHttp()
    const req = ctx.getRequest()

    const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.BAD_REQUEST

    const defaultHttpCode = httpStatus
    // if (trim(req.originalUrl, '/').startsWith('filemanager/')) {
    //   defaultHttpCode = httpStatus;
    // }

    let message
    if (exception.response) {
      message = exception.response.message instanceof Array ? exception.response.message : exception.response.message
    } else {
      message = exception.message
    }
    if (httpStatus === 401) {
      httpAdapter.reply(
        ctx.getResponse(),
        new ErrorPayloadDto({
          code: StatusCode.UNAUTHORIZED.code,
          success: false,
          msg: StatusCode.UNAUTHORIZED.type
        }),
        defaultHttpCode
      )
      return
    }
    if (httpStatus === 403) {
      httpAdapter.reply(
        ctx.getResponse(),
        new ErrorPayloadDto({
          code: StatusCode.FORBIDDEN.code,
          success: false,
          msg: StatusCode.FORBIDDEN.type
        }),
        defaultHttpCode
      )
      return
    }
    if (httpStatus === 404) {
      httpAdapter.reply(
        ctx.getResponse(),
        new ErrorPayloadDto({
          code: StatusCode.NOT_FOUND.code,
          success: false,
          msg: StatusCode.NOT_FOUND.type
        }),
        defaultHttpCode
      )
      return
    }
    if (httpStatus === 422) {
      httpAdapter.reply(
        ctx.getResponse(),
        new ErrorPayloadDto({
          code: StatusCode.VALIDATION_ERROR.code,
          success: false,
          msg: StatusCode.VALIDATION_ERROR.type,
          errors: message
        }),
        defaultHttpCode
      )
      return
    }
    if (typeof exception === 'string') {
      httpAdapter.reply(
        ctx.getResponse(),
        new ErrorPayloadDto({
          code: 400,
          success: false,
          msg: exception,
          errors: message
        }),
        defaultHttpCode
      )
      return
    }
    if (
      typeof exception === 'object' &&
      exception.code &&
      exception.type &&
      Object.values(StatusCode).includes(exception)
    ) {
      httpAdapter.reply(
        ctx.getResponse(),
        new ErrorPayloadDto({
          code: exception.code,
          success: false,
          msg: exception.type
        }),
        defaultHttpCode
      )
      return
    }
    console.log(exception)

    // const responseBody = {
    //   name: exception.name,
    //   statusCode: httpStatus,
    //   timestamp: new Date().toISOString(),
    //   path: httpAdapter.getRequestUrl(ctx.getRequest()),
    //   message,
    // };

    httpAdapter.reply(
      ctx.getResponse(),
      {
        code: httpStatus,
        success: false,
        msg: StatusCode.BACKEND.type,
        message,
        errors: message
      },
      defaultHttpCode
    )
  }
}

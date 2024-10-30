import { BadRequestException } from '@nestjs/common'
import { SuccessPayloadDto } from '../dto/success.payload.dto'
import { StatusCode } from '../configs/status.code'
import { ErrorPayloadDto } from '../dto/error.payload.dto'

export class SendResponse {
  static async success(data: any) {
    if (data instanceof Promise) data = await data
    return new SuccessPayloadDto({
      result: data
    })
  }

  static error(error: object | string) {
    if (typeof error === 'string') {
      if (StatusCode.hasOwnProperty(error)) {
        throw new BadRequestException(
          new ErrorPayloadDto({
            code: StatusCode[error].code,
            success: false,
            msg: error
          })
        )
      }
      throw new BadRequestException(
        new ErrorPayloadDto({
          code: StatusCode.BACKEND.code,
          success: false,
          msg: 'BACKEND'
        })
      )
    }
    if (typeof error === 'object') {
      let msg = null
      for (const e in StatusCode) {
        if (StatusCode[e].code === error['code']) {
          msg = e
          break
        }
      }
      throw new BadRequestException(
        new ErrorPayloadDto({
          code: error['code'],
          success: false,
          msg
        })
      )
    }
    throw new BadRequestException(
      new ErrorPayloadDto({
        code: StatusCode.BACKEND.code,
        success: false,
        msg: 'BACKEND'
      })
    )
  }
}

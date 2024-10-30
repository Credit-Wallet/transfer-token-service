import { ApiProperty } from '@nestjs/swagger'
import { StatusCode } from '../configs/status.code'

export class ErrorPayloadDto {
  @ApiProperty() code: number
  @ApiProperty() msg: string
  @ApiProperty({ example: false }) success: boolean
  @ApiProperty({ example: [] }) errors: Record<string, any> | any[]

  constructor({ code = StatusCode.BACKEND.code, success = false, msg = '', errors = [] }) {
    this.code = code
    this.success = success
    this.msg = msg
    this.errors = errors
  }
}

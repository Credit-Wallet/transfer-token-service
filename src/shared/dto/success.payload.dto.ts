import { ApiProperty } from '@nestjs/swagger'
import { StatusCode } from '../configs/status.code'

export class SuccessPayloadDto {
  @ApiProperty() code: number
  @ApiProperty({ example: false }) success: boolean
  @ApiProperty({ example: [] }) result: any

  constructor({ result = [] }) {
    this.code = StatusCode.SUCCESS.code
    this.success = true
    this.result = result
  }
}

import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsString } from '../validators/class-validator-message'

export class IdStringParamsDto {
  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  id: number
}

import { Type } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber } from '../validators/class-validator-message'
import { ToNumber } from '../validators/transform'

export class IdParamsDto {
  @ApiProperty()
  @Type(() => Number)
  @ToNumber()
  @IsNumber()
  @IsNotEmpty()
  id: number
}

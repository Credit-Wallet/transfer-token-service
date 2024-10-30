import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class TransferDto {
  @ApiProperty()
  @IsOptional()
  amount: number
  @ApiProperty()
  @IsOptional()
  privateKey: string
  @ApiProperty()
  @IsOptional()
  sender: string
  @ApiProperty()
  @IsOptional()
  receiver: string
}

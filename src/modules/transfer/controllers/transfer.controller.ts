import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { TransferDto } from '../dtos/transfer.dto'
import { TransferService } from '../services/transfer.service'

@Controller('transfer')
@ApiTags('Transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  async getTransfer(@Body() dto: TransferDto) {
    console.log(dto)

    return this.transferService.transfer(dto)
  }
}

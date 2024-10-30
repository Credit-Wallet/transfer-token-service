import { Injectable } from '@nestjs/common'
import { ethers } from 'ethers'
import { TransferDto } from '../dtos/transfer.dto'

@Injectable()
export class TransferService {
  async transfer(dto: TransferDto) {
    const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL)
    const paymentWallet = new ethers.Wallet(process.env.KEY_PAYMENT, provider)
    const fromWallet = new ethers.Wallet(dto.privateKey, provider)
    const tokenAbi = [
      'function transferWithSignature(address from, address to, uint256 amount, uint256 nonce, bytes memory signature) public',
      'function nonces(address owner) public view returns (uint256)'
    ]
    const tokenAddress = process.env.TOKEN_ADDRESS
    const tokenContract = new ethers.Contract(tokenAddress, tokenAbi, paymentWallet)

    try {
      const amount = ethers.utils.parseUnits(dto.amount.toString(), 18)

      const nonce = await tokenContract.nonces(dto.sender)

      const hash = ethers.utils.solidityKeccak256(['address', 'address', 'uint256', 'uint256', 'address'], [dto.sender, dto.receiver, amount, nonce, tokenAddress])

      const signature = await fromWallet.signMessage(ethers.utils.arrayify(hash))

      const transferTx = await tokenContract.transferWithSignature(dto.sender, dto.receiver, amount, nonce, signature)
      await transferTx.wait()

      console.log('Chuyển token thành công từ ví B sang ví C, với ví A trả phí gas.')
      return transferTx.hash
    } catch (error) {
      console.error('Lỗi trong quá trình chuyển token với chữ ký:', error)
    }
  }
}

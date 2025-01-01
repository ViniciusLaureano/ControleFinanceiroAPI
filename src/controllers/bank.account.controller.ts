import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Bank_Account } from '@prisma/client';
import { BankAccountCreateDTO } from 'src/dtos/bankAccount/bank.account.create.dto';
import { BankAccountUpdateDTO } from 'src/dtos/bankAccount/bank.account.update.dto';
import { BankAccountService } from 'src/services/bank.account.service';

@ApiTags('BankAccount')
@Controller('bankAccount')
export class BankAccountController {
  constructor(private bankAccountService: BankAccountService) {}

  @Get('user/:userId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getAllBankAccountsUser(
    @Param('userId') userId: string,
  ): Promise<Bank_Account[]> {
    return this.bankAccountService.getAllBankAccountsUser(userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getBankAccountById(@Param('id') id: string): Promise<Bank_Account> {
    return this.bankAccountService.getBankAccountById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  createBankAccount(@Body() body: BankAccountCreateDTO): Promise<Bank_Account> {
    return this.bankAccountService.createBankAccount(body);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  updateBankAccount(
    @Param('id') id: string,
    @Body() body: BankAccountUpdateDTO,
  ): Promise<Bank_Account> {
    return this.bankAccountService.updateBankAccount(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  deleteBankAccount(@Param('id') id: string): Promise<Bank_Account> {
    return this.bankAccountService.deleteBankAccount(id);
  }
}

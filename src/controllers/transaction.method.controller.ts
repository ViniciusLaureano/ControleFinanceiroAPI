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
import { Transaction_Method } from '@prisma/client';
import { TransactionMethodCreateDTO } from 'src/dtos/transactionMethod/transaction.method.create.dto';
import { TransactionMethodUpdateDTO } from 'src/dtos/transactionMethod/transaction.method.update.dto';
import { TransactionMethodService } from 'src/services/transaction.method.service';

@ApiTags('TransactionMethod')
@Controller('transactionMethod')
export class TransactionMethodController {
  constructor(private transactionMethodService: TransactionMethodService) {}

  @Get('bank/:bankAccountId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getAllTransactionMethodsByBank(
    @Param('bankAccountId') bankAccountId: string,
  ): Promise<Transaction_Method[]> {
    return this.transactionMethodService.getAllTransactionMethodsByBank(
      bankAccountId,
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getTransactionMethodById(
    @Param('id') id: string,
  ): Promise<Transaction_Method> {
    return this.transactionMethodService.getTransactionMethodById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  createTransactionMethod(
    @Body() body: TransactionMethodCreateDTO,
  ): Promise<Transaction_Method> {
    return this.transactionMethodService.createTransactionMethod(body);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  updateTransactionMethod(
    @Param('id') id: string,
    @Body() body: TransactionMethodUpdateDTO,
  ): Promise<Transaction_Method> {
    return this.transactionMethodService.updateTransactionMethod(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  deleteTransactionMethod(
    @Param('id') id: string,
  ): Promise<Transaction_Method> {
    return this.transactionMethodService.deleteTransactionMethod(id);
  }
}

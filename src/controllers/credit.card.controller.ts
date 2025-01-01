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
import { Credit_Card } from '@prisma/client';
import { CreditCardCreateDTO } from 'src/dtos/creditCard/credit.card.create.dto';
import { CreditCardUpdateDTO } from 'src/dtos/creditCard/credit.card.update.dto';
import { CreditCardService } from 'src/services/credit.card.service';

@ApiTags('CreditCard')
@Controller('credtiCard')
export class CreditCardController {
  constructor(private creditCardService: CreditCardService) {}

  @Get('bankAccount/:bankAccountId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getAllCreditCardsByBank(
    @Param('bankAccountId') bankAccountId: string,
  ): Promise<Credit_Card[]> {
    return this.creditCardService.getAllCreditCardsByBank(bankAccountId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getCreditCardById(@Param('id') id: string): Promise<Credit_Card> {
    return this.creditCardService.getCreditCardById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  createCreditCard(@Body() body: CreditCardCreateDTO): Promise<Credit_Card> {
    return this.creditCardService.createCreditCard(body);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  updateCreditCard(
    @Param('id') id: string,
    @Body() body: CreditCardUpdateDTO,
  ): Promise<Credit_Card> {
    return this.creditCardService.updateCreditCard(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  deleteBankAccount(@Param('id') id: string): Promise<Credit_Card> {
    return this.creditCardService.deleteCreditCard(id);
  }
}

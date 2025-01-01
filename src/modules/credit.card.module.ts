import { Module } from '@nestjs/common';
import { CreditCardController } from 'src/controllers/credit.card.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaCreditCardRepository } from 'src/repositories/creditCard/credit.card.prisma.repository';
import { CreditCardRepository } from 'src/repositories/creditCard/credit.card.repository';
import { CreditCardService } from 'src/services/credit.card.service';

@Module({
  controllers: [CreditCardController],
  providers: [
    PrismaService,
    CreditCardService,
    {
      provide: CreditCardRepository,
      useClass: PrismaCreditCardRepository,
    },
  ],
})
export class CreditCardModule {}

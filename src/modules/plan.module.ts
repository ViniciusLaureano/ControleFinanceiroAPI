import { Module } from '@nestjs/common';
import { PlanController } from 'src/controllers/plan.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaPlanRepository } from 'src/repositories/plan/plan.prisma.repository';
import { PlanRepository } from 'src/repositories/plan/plan.repository';
import { PlanService } from 'src/services/plan.service';

@Module({
  controllers: [PlanController],
  providers: [
    PlanService,
    PrismaService,
    {
      provide: PlanRepository,
      useClass: PrismaPlanRepository,
    },
  ],
  exports: [PlanService],
})
export class PlanModule {}

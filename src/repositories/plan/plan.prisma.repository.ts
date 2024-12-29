import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Plan } from '@prisma/client';
import { PlanRepository } from './plan.repository';

@Injectable()
export class PrismaPlanRepository implements PlanRepository {
  constructor(private prisma: PrismaService) {}

  getPlans(): Promise<Plan[]> {
    return this.prisma.plan.findMany();
  }

  getPlanById(planId: string): Promise<Plan> {
    return this.prisma.plan.findUniqueOrThrow({ where: { id: planId } });
  }
}

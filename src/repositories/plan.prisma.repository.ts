import { PrismaService } from 'src/database/prisma.service';
import { PlanRepository } from './plan.repository';
import { Injectable } from '@nestjs/common';

Injectable();
export class PrismaPlanRepository implements PlanRepository {
  constructor(private prisma: PrismaService) {}
}

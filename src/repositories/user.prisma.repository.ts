import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PrismaService } from 'src/database/prisma.service';
import { User_Plan } from '@prisma/client';
import { UserPlanDTO } from 'src/dtos/user/userplan.dto';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async getUserPlan(userId: string): Promise<UserPlanDTO> {
    const userplan = await this.prisma.user_Plan.findUniqueOrThrow({
      where: { user_id: userId },
      include: { plan: true },
    });

    const result: UserPlanDTO = {
      userplanId: userplan.id,
      planId: userplan.plan_id,
      planName: userplan.plan.id,
      startDate: userplan.start_date,
      finishDate: userplan.finish_date,
      value: userplan.plan.value,
    };

    return result;
  }
  assignPlan(
    user_id: string,
    plan_id: string,
    start_date: Date,
    finish_date: Date,
  ): Promise<User_Plan> {
    return this.prisma.$transaction(async (prisma) => {
      await prisma.user.update({
        where: { id: user_id },
        data: { permission: 'complete' },
      });

      return prisma.user_Plan.upsert({
        create: { user_id, plan_id, start_date, finish_date },
        update: { plan_id, start_date, finish_date },
        where: { user_id },
      });
    });
  }
}

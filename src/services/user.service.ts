import { HttpException, Injectable } from '@nestjs/common';
import { UserPlanDTO } from 'src/dtos/user/userplan.dto';
import { UserRepository } from 'src/repositories/user/user.repository';
import { PlanService } from './plan.service';
import { User_Plan } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private planService: PlanService,
  ) {}

  async getUserPlan(userId: string): Promise<UserPlanDTO> {
    let userPlan: UserPlanDTO;
    try {
      userPlan = await this.userRepository.getUserPlan(userId);
    } catch (error) {
      userPlan = {
        userplanId: undefined,
        planId: undefined,
        planName: undefined,
        startDate: undefined,
        finishDate: undefined,
        value: undefined,
      };
    }

    return userPlan;
  }

  async assignPlan(userId: string, planId: string): Promise<User_Plan> {
    const plan = await this.planService.getPlanById(planId);
    const userPlan = await this.getUserPlan(userId);

    let startDate: Date = new Date();
    let finishDate: Date = new Date(startDate);

    if (userPlan.userplanId) {
      startDate = userPlan.startDate;
      finishDate = userPlan.finishDate;
    }

    if (plan.months === 0) plan.months = 10000;
    finishDate.setMonth(finishDate.getMonth() + plan.months);

    let transaction: User_Plan;
    try {
      transaction = await this.userRepository.assignPlan(
        userId,
        planId,
        startDate,
        finishDate,
      );
    } catch (error) {
      throw new HttpException('Error while assigning plan', 400);
    }

    return transaction;
  }

  async removePlan(userId: string): Promise<boolean> {
    let result: boolean = true;
    try {
      await this.userRepository.removePlan(userId);
    } catch (error) {
      result = false;
    }

    return result;
  }
}

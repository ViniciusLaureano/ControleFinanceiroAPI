import { Injectable } from '@nestjs/common';
import { UserPlanDTO } from 'src/dtos/user/userplan.dto';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

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
}

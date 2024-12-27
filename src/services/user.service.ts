import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserPlanDTO } from 'src/dtos/user/userplan.dto';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserPlan(userId: string): Promise<UserPlanDTO> {
    return await this.userRepository.getUserPlan(userId);
  }
}

import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserAssignPlanDTO } from 'src/dtos/user/user.assign.plan.dto';
import { UserPlanDTO } from 'src/dtos/user/userplan.dto';
import { UserService } from 'src/services/user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':userId/plan')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  @ApiOperation({
    summary: "user's current plan",
    description: "user's current plan",
  })
  @ApiOkResponse({
    description: 'success',
    type: UserPlanDTO,
  })
  getUserPlan(@Param('userId') userId: string): Promise<UserPlanDTO> {
    return this.userService.getUserPlan(userId);
  }

  @Post(':userId/plan/:planId')
  @HttpCode(HttpStatus.CREATED)
  @ApiBearerAuth('access-token')
  assignPlan(@Param() userAssignPlanDTO: UserAssignPlanDTO) {
    return this.userService.assignPlan(
      userAssignPlanDTO.userId,
      userAssignPlanDTO.planId,
    );
  }
}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Allocation } from '@prisma/client';
import { AllocationService } from 'src/services/allocation.service';

@ApiTags('Allocation')
@Controller('allocation')
export class AllocationController {
  constructor(private allocationService: AllocationService) {}

  @Get('user/:userId')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getAllocationsByUser(@Param('userId') userId: string): Promise<Allocation[]> {
    return this.allocationService.getAllocationsByUser(userId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  getAllocationById(@Param('id') id: string): Promise<Allocation> {
    return this.allocationService.getAllocationById(id);
  }

  @Put('')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('access-token')
  updateAllocations(@Body() allocations: Allocation[]): Promise<Allocation[]> {
    return this.allocationService.updateAllocation(allocations);
  }
}

import { Module } from '@nestjs/common';
import { AllocationController } from 'src/controllers/allocation.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaAllocationRepository } from 'src/repositories/allocation/allocation.prisma.respository';
import { AllocationRepository } from 'src/repositories/allocation/allocation.repository';
import { AllocationService } from 'src/services/allocation.service';

@Module({
  controllers: [AllocationController],
  providers: [
    PrismaService,
    AllocationService,
    {
      provide: AllocationRepository,
      useClass: PrismaAllocationRepository,
    },
  ],
})
export class AllocationModule {}

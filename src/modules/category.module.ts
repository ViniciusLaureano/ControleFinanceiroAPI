import { Module } from '@nestjs/common';
import { CategoryController } from 'src/controllers/category.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaCategoryRepository } from 'src/repositories/category/category.prisma.repository';
import { CategoryRepository } from 'src/repositories/category/category.repository';
import { CategoryService } from 'src/services/category.service';

@Module({
  controllers: [CategoryController],
  providers: [
    CategoryService,
    PrismaService,
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
})
export class CategoryModule {}

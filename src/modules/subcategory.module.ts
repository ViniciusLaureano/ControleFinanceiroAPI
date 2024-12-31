import { Module } from '@nestjs/common';
import { SubcategoryController } from 'src/controllers/subcategory.controller';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaSubcategoryRepository } from 'src/repositories/subcategory/subcategory.prisma.repository';
import { SubcategoryRepository } from 'src/repositories/subcategory/subcategory.repository';
import { SubcategoryService } from 'src/services/subcategory.service';

@Module({
  controllers: [SubcategoryController],
  providers: [
    SubcategoryService,
    PrismaService,
    {
      provide: SubcategoryRepository,
      useClass: PrismaSubcategoryRepository,
    },
  ],
})
export class SubcategoryModule {}

import { Injectable } from '@nestjs/common';
import { SubcategoryRepository } from './subcategory.repository';
import { Subcategory } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaSubcategoryRepository implements SubcategoryRepository {
  constructor(private prisma: PrismaService) {}

  getSubcategoryByCategory(category_id: string): Promise<Subcategory[]> {
    return this.prisma.subcategory.findMany({ where: { category_id } });
  }

  getSubcategoryById(id: string): Promise<Subcategory> {
    return this.prisma.subcategory.findUnique({ where: { id } });
  }

  createSubcategory(
    category_id: string,
    name: string,
    allocation_id: string,
  ): Promise<Subcategory> {
    return this.prisma.subcategory.create({
      data: { name, allocation_id, category_id },
    });
  }
}

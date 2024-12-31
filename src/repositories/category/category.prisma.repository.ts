import { PrismaService } from 'src/database/prisma.service';
import { CategoryRepository } from './category.repository';
import { Category, CategoryInOut } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private prisma: PrismaService) {}

  getCategories(user_id: string): Promise<Category[]> {
    return this.prisma.category.findMany({ where: { user_id } });
  }

  getCategoryById(id: string): Promise<Category> {
    return this.prisma.category.findUniqueOrThrow({
      where: { id },
    });
  }

  deleteCategory(id: string): Promise<Category> {
    return this.prisma.category.delete({ where: { id } });
  }

  editCategory(
    id: string,
    name: string,
    in_out: CategoryInOut,
  ): Promise<Category> {
    return this.prisma.category.update({
      where: { id },
      data: { name, in_out },
    });
  }

  createCategory(
    name: string,
    in_out: CategoryInOut,
    user_id: string,
  ): Promise<Category> {
    return this.prisma.category.create({ data: { name, in_out, user_id } });
  }

  getTotalCategories(user_id: string): Promise<number> {
    return this.prisma.category.count({ where: { user_id } });
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { Subcategory } from '@prisma/client';
import { SubcategoryRepository } from 'src/repositories/subcategory/subcategory.repository';

@Injectable()
export class SubcategoryService {
  constructor(private subcategoryRepository: SubcategoryRepository) {}

  getSubcategoryByCategory(categoryId: string): Promise<Subcategory[]> {
    try {
      return this.subcategoryRepository.getSubcategoryByCategory(categoryId);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}

import { HttpException, Injectable } from '@nestjs/common';
import { Subcategory } from '@prisma/client';
import { SubcategoryCreateDTO } from 'src/dtos/subcategory/subcategory.create.dto';
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

  getSubcategoryById(id: string): Promise<Subcategory> {
    try {
      return this.subcategoryRepository.getSubcategoryById(id);
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }

  createSubcategory(body: SubcategoryCreateDTO): Promise<Subcategory> {
    const { category_id, name, allocation_id } = body;

    try {
      return this.subcategoryRepository.createSubcategory(
        category_id,
        name,
        allocation_id,
      );
    } catch (error) {
      throw new HttpException('Error', 400);
    }
  }
}

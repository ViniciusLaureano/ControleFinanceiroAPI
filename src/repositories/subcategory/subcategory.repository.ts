import { Subcategory } from '@prisma/client';

export abstract class SubcategoryRepository {
  abstract getSubcategoryByCategory(
    category_id: string,
  ): Promise<Subcategory[]>;

  abstract getSubcategoryById(id: string): Promise<Subcategory>;

  abstract createSubcategory(
    category_id: string,
    name: string,
    allocation_id: string,
  ): Promise<Subcategory>;
}

import { Subcategory } from '@prisma/client';

export abstract class SubcategoryRepository {
  abstract getSubcategoryByCategory(
    category_id: string,
  ): Promise<Subcategory[]>;
}

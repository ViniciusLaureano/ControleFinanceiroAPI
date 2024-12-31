import { Injectable } from '@nestjs/common';
import { SubcategoryRepository } from 'src/repositories/subcategory/subcategory.repository';

@Injectable()
export class SubcategoryService {
  constructor(private subcategoryRepository: SubcategoryRepository) {}
}

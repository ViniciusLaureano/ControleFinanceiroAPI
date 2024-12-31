import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SubcategoryService } from 'src/services/subcategory.service';

@ApiTags('Subcategory')
@Controller('subcategory')
export class SubcategoryController {
  constructor(private subcategoryService: SubcategoryService) {}
}

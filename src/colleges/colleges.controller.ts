import { Controller, Get, Param, Query } from '@nestjs/common';
import { CollegesService } from './colleges.service';

@Controller('colleges')
export class CollegesController {
  constructor(private readonly collegesService: CollegesService) {}

  @Get()
  async getColleges(@Query('city') city: string, @Query('state') state: string) {
    return this.collegesService.getColleges(city, state);
  }

  @Get(':id')
  async getCollegeById(@Param('id') id: number) {
    return this.collegesService.getCollegeById(id);
  }
}


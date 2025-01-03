import { Controller, Get, Param } from '@nestjs/common';
import { CollegeCoursesService } from './college-courses.service';

@Controller('college_courses')
export class CollegeCoursesController {
  constructor(private readonly collegeCoursesService: CollegeCoursesService) {}

  @Get(':college_id')
  async getCourses(@Param('college_id') collegeId: number) {
    return this.collegeCoursesService.getCoursesByCollege(collegeId);
  }
}

import { Module } from '@nestjs/common';
import { CollegeCoursesController } from './college-courses.controller';
import { CollegeCoursesService } from './college-courses.service';

@Module({
  controllers: [CollegeCoursesController],
  providers: [CollegeCoursesService]
})
export class CollegeCoursesModule {}

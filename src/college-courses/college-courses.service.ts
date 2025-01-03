import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CollegeWiseCourse } from './entities/college-wise-course.entity';

@Injectable()
export class CollegeCoursesService {
  constructor(
    @InjectRepository(CollegeWiseCourse)
    private readonly coursesRepo: Repository<CollegeWiseCourse>,
  ) {}

  async getCoursesByCollege(collegeId: number) {
    return this.coursesRepo.find({ where: { college_id: collegeId } });
  }
}

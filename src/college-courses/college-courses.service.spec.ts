import { Test, TestingModule } from '@nestjs/testing';
import { CollegeCoursesService } from './college-courses.service';

describe('CollegeCoursesService', () => {
  let service: CollegeCoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollegeCoursesService],
    }).compile();

    service = module.get<CollegeCoursesService>(CollegeCoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

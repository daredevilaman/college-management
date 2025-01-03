import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { College } from './entities/college.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CollegesService {
  constructor(
    @InjectRepository(College) private readonly collegeRepo: Repository<College>,
  ) {}

  async getColleges(city?: string, state?: string) {
    return this.collegeRepo.find({
      where: {
        city: { name: city },
        state: { name: state },
      },
      relations: ['city', 'state'],
    });
  }

  async getCollegeById(id: number) {
    return this.collegeRepo.findOne({ where: { id }, relations: ['city', 'state'] });
  }
}


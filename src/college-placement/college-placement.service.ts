import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CollegePlacement } from './entities/college-placement.entity';

@Injectable()
export class CollegePlacementService {
  constructor(
    @InjectRepository(CollegePlacement)
    private readonly placementRepo: Repository<CollegePlacement>,
  ) {}

  async getPlacementData(collegeId: number) {
    const placements = await this.placementRepo.find({
      where: { college_id: collegeId },
    });

    return placements;
  }
}

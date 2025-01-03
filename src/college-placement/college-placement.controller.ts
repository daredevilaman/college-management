import { Controller, Get, Param } from '@nestjs/common';
import { CollegePlacementService } from './college-placement.service';

@Controller('college_data')
export class CollegePlacementController {
  constructor(private readonly placementService: CollegePlacementService) {}

  @Get(':college_id')
  async getPlacementData(@Param('college_id') collegeId: number) {
    return this.placementService.getPlacementData(collegeId);
  }
}


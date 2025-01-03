import { Module } from '@nestjs/common';
import { CollegePlacementController } from './college-placement.controller';
import { CollegePlacementService } from './college-placement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollegePlacement } from './entities/college-placement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CollegePlacement])],
  controllers: [CollegePlacementController],
  providers: [CollegePlacementService],
})
export class CollegePlacementModule {}

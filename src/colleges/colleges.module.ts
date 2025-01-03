import { Module } from '@nestjs/common';
import { CollegesController } from './colleges.controller';
import { CollegesService } from './colleges.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { College } from './entities/college.entity';
import { City } from './entities/city.entity';
import { State } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([College, City, State])],
  controllers: [CollegesController],
  providers: [CollegesService],
})
export class CollegesModule {}

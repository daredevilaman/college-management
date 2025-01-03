import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from '../../colleges/entities/college.entity';

@Entity('college_placements')
export class CollegePlacement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  college_id: number;

  @Column()
  year: number;

  @Column()
  highest_placement: number;

  @Column()
  average_placement: number;

  @Column()
  median_placement: number;

  @Column()
  placement_rate: number;

  @ManyToOne(() => College, (college) => college.id)
  college: College;
}

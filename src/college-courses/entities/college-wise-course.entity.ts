import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { College } from '../../colleges/entities/college.entity';

@Entity('college_courses')
export class CollegeWiseCourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  college_id: number;

  @Column()
  course_name: string;

  @Column()
  department: string;

  @ManyToOne(() => College, (college) => college.id)
  college: College;
}

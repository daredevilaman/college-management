import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { City } from './city.entity';
import { State } from './state.entity';

@Entity('colleges')
export class College {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', default: 0 })
  score: number;

  @ManyToOne(() => City, (city) => city.colleges)
  city: City;

  @ManyToOne(() => State, (state) => state.colleges)
  state: State;
}

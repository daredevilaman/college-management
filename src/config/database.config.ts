import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity'; // Adjust the path according to your project structure
import { College } from '../colleges/entities/college.entity'; // Adjust as needed
import { CollegePlacement } from '../college-placement/entities/college-placement.entity'; // Adjust as needed
import { CollegeWiseCourse } from '../college-courses/entities/college-wise-course.entity'; // Adjust as needed

export const DatabaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || '1234', // Update with your actual DB password
  database: process.env.DATABASE_NAME || 'your_database_name', // Set the correct DB name
  entities: [
    User, // Add all your entity classes here
    College,
    CollegePlacement,
    CollegeWiseCourse,
  ],
  synchronize: true, // Set to false for production to avoid automatic schema generation
};


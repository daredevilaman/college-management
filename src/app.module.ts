import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';  // Ensure the path is correct here
import { CollegesModule } from './colleges/colleges.module';
import { CollegePlacementModule } from './college-placement/college-placement.module';
import { CollegeCoursesModule } from './college-courses/college-courses.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(DatabaseConfig),
    AuthModule,  // Correct usage of AuthModule here
    CollegesModule,
    CollegePlacementModule,
    CollegeCoursesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

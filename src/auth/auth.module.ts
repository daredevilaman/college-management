import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [JwtModule.register({ secret: 'secretKey', signOptions: { expiresIn: '60s' } }), UsersModule],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService], // This line ensures AuthService can be used elsewhere.
})
export class AuthModule {}


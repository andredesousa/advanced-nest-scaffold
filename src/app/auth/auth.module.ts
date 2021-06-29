import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './services/auth.service';
import { JwtStrategy } from './services/jwt.strategy';
import { environment } from '../../environments/environment';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: environment.jwtSecret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

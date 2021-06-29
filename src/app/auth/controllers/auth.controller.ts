import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Authentication } from '../dtos/authentication.dto';
import { UserSession } from '../dtos/user-session.dto';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() auth: Authentication): Promise<UserSession> {
    return this.authService.login(auth);
  }

  @Post('refresh')
  @UseGuards(AuthGuard('jwt'))
  refresh(@Request() { user }: { user: UserSession }): Promise<string> {
    return this.authService.refresh(user);
  }
}

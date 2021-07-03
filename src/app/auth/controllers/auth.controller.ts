import { Body, Controller, Post, Request } from '@nestjs/common';
import { Public } from '../decorators/public.decorator';
import { Authentication } from '../dtos/authentication.dto';
import { UserSession } from '../dtos/user-session.dto';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @Public()
  login(@Body() auth: Authentication): Promise<UserSession> {
    return this.authService.login(auth);
  }

  @Post('refresh')
  refresh(@Request() { user }: { user: UserSession }): Promise<string> {
    return this.authService.refresh(user);
  }
}

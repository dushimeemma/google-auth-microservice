/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Controller('auth')
export class AuthController {
  constructor(private eventEmitter: EventEmitter2) {}
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    this.eventEmitter.emit('user.logged_in', req.user);
    return {
      statusCode: 200,
      data: req.user,
    };
  }
}

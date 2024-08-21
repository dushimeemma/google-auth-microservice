import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(private eventEmitter: EventEmitter2) {}

  onModuleInit() {
    this.eventEmitter.on('user.logged_in', (user) => {
      console.log('User logged in:', user);
    });
  }

  @OnEvent('user.logged_in')
  handleUserLoggedInEvent(user: any) {
    console.log('User logged in:', user);
  }
}

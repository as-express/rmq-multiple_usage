import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('new-user')
  async sendMail(email: string) {
    console.log(`Message with email ${email}`);
    return this.appService.sendMail(email);
  }
}

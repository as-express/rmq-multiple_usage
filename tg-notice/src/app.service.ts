import { Injectable } from '@nestjs/common';
import { chatId, token } from 'common/config/index.cfg';
import * as TelegramBot from 'node-telegram-bot-api';

@Injectable()
export class AppService {
  private bot: TelegramBot;
  constructor() {
    this.bot = new TelegramBot(token, { polling: true });
  }

  async sendMessage(email: string): Promise<Boolean> {
    const msg = `New User Register with email ${email}`;
    this.bot.sendMessage(chatId, msg);
    console.log('Tg Message sended');
    return true;
  }
}

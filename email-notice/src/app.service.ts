import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailer: MailerService) {}

  async sendMail(email: string) {
    this.mailer.sendMail({
      from: 'Nest-Microservice <miko.mikoo1999@gmail.com>',
      to: email,
      subject: 'Welcome to NestJs Server',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
          <header style="text-align: center; margin-bottom: 20px;">
            <img src="https://via.placeholder.com/120" alt="NestJS Logo" style="width: 120px; border-radius: 50%;" />
          </header>
          <h1 style="color: #333333; text-align: center; font-size: 24px;">Добро пожаловать в NestJs Server!</h1>
          <p style="color: #555555; font-size: 16px; line-height: 1.5; text-align: center;">
            Мы рады видеть вас в нашем сообществе! NestJS — это мощный инструмент для построения серверов. Мы уверены, что вам понравится наш сервис.
          </p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://nestjs.com/" style="display: inline-block; background-color: #007bff; color: #ffffff; text-decoration: none; padding: 10px 20px; font-size: 16px; border-radius: 5px; transition: background-color 0.3s;">
              Узнать больше
            </a>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          <footer style="text-align: center; color: #999999; font-size: 12px;">
            <p>&copy; 2024 Nest-Microservice. Все права защищены.</p>
          </footer>
        </div>
      `,
    });

    console.log('Email is sended');
    return true;
  }
}

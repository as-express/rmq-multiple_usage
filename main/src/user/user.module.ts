import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schema/user.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { amqpUrl } from 'common/config/amqp.cfg';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
    ClientsModule.register([
      {
        name: 'EMAIL-NOTICE',
        transport: Transport.RMQ,
        options: {
          urls: [amqpUrl],
          queue: 'email_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'TG-NOTICE',
        transport: Transport.RMQ,
        options: {
          urls: [amqpUrl],
          queue: 'tg_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

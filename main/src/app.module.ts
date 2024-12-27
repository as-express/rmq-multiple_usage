import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoUrl } from 'common/config/mongo.cfg';

@Module({
  imports: [MongooseModule.forRoot(mongoUrl), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

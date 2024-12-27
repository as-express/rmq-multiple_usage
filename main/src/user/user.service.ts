import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { userDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private user: Model<User>) {}

  async newUser(dto: userDto): Promise<User> {
    const user = new this.user(dto);
    await user.save();

    return user;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.user.find().lean();
    return users;
  }

  async removeUser(id: string): Promise<Boolean> {
    await this.user.findByIdAndDelete(id);
    return true;
  }
}

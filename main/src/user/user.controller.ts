import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { userDto } from './dto/user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @Inject('EMAIL-NOTICE') private readonly emailClient: ClientProxy,
    @Inject('TG-NOTICE') private readonly tgClient: ClientProxy,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async insertUser(@Body() dto: userDto) {
    const result = await this.userService.newUser(dto);

    this.emailClient.emit('new-user', result.email);
    this.tgClient.emit('new-user', result.email);

    return result;
  }

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    const result = await this.userService.removeUser(id);

    return result;
  }
}

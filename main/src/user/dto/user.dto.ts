import { IsNotEmpty } from 'class-validator';

export class userDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  tgUsername: string;

  @IsNotEmpty()
  email: string;
}

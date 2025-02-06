import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  userName: string;
  @IsString()
  password: string;
  @IsString()
  email: string;
}

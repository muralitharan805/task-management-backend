import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  password: string;
  @IsString()
  @IsEmail()
  email: string;
  @IsString()
  status: string = 'active';
}

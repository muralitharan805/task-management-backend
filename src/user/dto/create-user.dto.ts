import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;
  @IsString()
  password: string;
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  mobileNumber: string;

  county: string;

  city: string;

  state: string;

  gender: string;

  @IsString()
  status: string = 'active';
}

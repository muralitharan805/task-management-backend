import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(createAuthDto: CreateAuthDto): Promise<any> {
    const user = await this.usersService.isUserExists(createAuthDto.email);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const isMatch = await bcrypt.compare(createAuthDto.password, user.password);
    console.log('isMatch ', isMatch);

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.usersService.create(createUserDto);
    const getUser = await this.usersService.isUserExists(user.email);
    const payload = { sub: getUser.id, username: user.email };
    return {
      ...user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

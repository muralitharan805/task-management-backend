import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interface/IUser';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<IUser>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const isUserExists = await this.isUserExists(createUserDto.email);
    console.log('isUserExists ', isUserExists);
    if (isUserExists) {
      throw new UnauthorizedException('User found');
    }
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );

    const user = await this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });

    return { name: user.name, email: user.email, _id: user.id };
  }

  findAll() {
    return this.userModel.find().then((data) => data);
  }

  async isUserExists(email: string) {
    return this.userModel.findOne({ email: email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async login(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto);
    return user.save();
  }
}

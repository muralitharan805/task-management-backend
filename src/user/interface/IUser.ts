import { Document } from 'mongoose';

export class IUser extends Document {
  name: string;
  userName: string;
  password: string;
  email: string;
}

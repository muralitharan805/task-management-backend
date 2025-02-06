import { Document } from 'mongoose';

export class IUser extends Document {
  name: string;
  password: string;
  email: string;
  status: string;
}

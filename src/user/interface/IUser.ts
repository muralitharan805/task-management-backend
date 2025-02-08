import { Document } from 'mongoose';

export class IUser extends Document {
  name: string;
  email: string;
  password: string;
  mobileNumber: string;
  county: string;
  city: string;
  state: string;
  gender: string;

  status: string;
}

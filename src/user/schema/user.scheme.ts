import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;

  @Prop()
  mobileNumber: string;
  @Prop()
  password: string;

  @Prop()
  county: string;
  @Prop()
  city: string;

  @Prop()
  state: string;
  @Prop()
  gender: string;

  @Prop()
  status: string;
}

export const userSchema = SchemaFactory.createForClass(User);

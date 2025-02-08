import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  startDate: string;
  @Prop()
  endDate: string;
  @Prop()
  totalTask: number = 10;
  @Prop()
  status: string;
}

export const taskSchema = SchemaFactory.createForClass(Task);

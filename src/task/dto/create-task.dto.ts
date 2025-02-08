import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  startDate: string;
  @IsString()
  endDate: string;
  @IsString()
  status: string;
}

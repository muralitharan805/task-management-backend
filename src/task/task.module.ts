import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { taskSchema } from './schema/task.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // Import the MongooseModule to use the Task schema
    MongooseModule.forFeature([{ name: 'Task', schema: taskSchema }]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}

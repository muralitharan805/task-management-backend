import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schema/task.schema';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel('Task')
    private taskModel: Model<Task>,
  ) {}
  create(createTaskDto: CreateTaskDto) {
    return this.taskModel.create(createTaskDto);
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit; // Calculate number of documents to skip

    const tasks = await this.taskModel.find().skip(skip).limit(limit).exec();
    const total = await this.taskModel.countDocuments().exec();

    return {
      list: tasks,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  findOne(id: string) {
    return this.taskModel.find({ _id: id });
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.updateOne({ _id: id }, updateTaskDto);
  }

  remove(id: string) {
    return this.taskModel.deleteOne({ _id: id });
  }
}

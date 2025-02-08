import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { databaseProviders } from 'src/database/database-providers/database-providers';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://muralitharan805:ooXdNVhzcrq6PJha@cluster0.aqk6z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    ),
  ],
})
export class DatabaseModule {}

import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksModule } from './tasks/tasks.module';

// https://docs.nestjs.com/techniques/task-scheduling 
// タスクのスケジューリング

@Module({
  imports: [ScheduleModule.forRoot(), TasksModule]
})
export class AppModule {}

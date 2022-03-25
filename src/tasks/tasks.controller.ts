import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { Task } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // Define get all tasks url endpoint
  @Get()
  getAllTaks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Task {
    return this.tasksService.createTasks(title, description)
  }
}

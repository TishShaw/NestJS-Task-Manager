import { Body, Controller, Get, Post } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './create-task.dto';
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
  createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTasks(CreateTaskDto);
  }
}

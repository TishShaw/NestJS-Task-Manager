import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { title } from 'process';
import { CreateTaskDto } from './create-task.dto';
import { Task, TasksStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // Define get all tasks url endpoint
  @Get()
  getAllTaks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  // http:localhost:3000/tasks/id
  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: string): void {
    return this.tasksService.deleteTaskById(id);
  }

  @Post()
  createTask(@Body() CreateTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTasks(CreateTaskDto);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TasksStatus,
   ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}

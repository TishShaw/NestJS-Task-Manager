import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './create-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  createTasks(createTaskDto: CreateTaskDto): Task {
    const { title, description} = createTaskDto

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TasksStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}

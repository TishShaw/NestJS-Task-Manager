import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TasksStatus } from './tasks.model';
import { GetTaskFilterDto } from '../dto/get-task-filter-dto';

// The Injectable() decorator is used to define a certain class should have a shared instance across the module.
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTasksWithFilters(filterData: GetTaskFilterDto): Task[] {
    const { status, search } = filterData;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task) => {
        if (
          task.title.toLowerCase().includes(search) ||
          task.description.toLowerCase().includes(search)
        ) {
          return true;
        }
        return false;
      });
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    const found = this.tasks.find((task) => task.id === id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  createTasks(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TasksStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTaskById(id: string): void {
    const found = this.getTaskById(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TasksStatus) {
    const task = this.tasks.find((task) => task.id === id);
    task.status = status;
    return task;
  }
}

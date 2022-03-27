import { TasksStatus } from '../tasks/tasks.model';

export class GetTaskFilterDto {
  status?: TasksStatus;
  search?: string;
}

import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TasksStatus } from '../tasks.model';

export class GetTaskFilterDto {
  @IsOptional()
  // if a value is provided use enum to check if its in the enumeration
  @IsEnum(TasksStatus)
  status: TasksStatus;

  @IsOptional()
  // if a value is provided use enum to check if it is a string
  @IsString()
  search: string;
}

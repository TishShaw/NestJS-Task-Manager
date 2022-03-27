//  DTOs define the shape of the data of an icoming request, allows us to re-use the definition throughout the application.

import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

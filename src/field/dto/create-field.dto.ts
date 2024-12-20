import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFieldDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

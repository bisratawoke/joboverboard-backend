import { IsNotEmpty, IsString } from 'class-validator';
export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  city: string;
}

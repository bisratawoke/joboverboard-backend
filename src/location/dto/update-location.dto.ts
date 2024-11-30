import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateLocationDto {
  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  city: string;
}

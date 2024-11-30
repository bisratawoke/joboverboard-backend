import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { SENIORITY, WORKPLACE } from '../schemas/job.schema';
import { Transform } from 'class-transformer';
import mongoose from 'mongoose';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(SENIORITY)
  @IsNotEmpty()
  seniority: SENIORITY;

  @IsEnum(WORKPLACE)
  @IsNotEmpty()
  workplace: WORKPLACE;

  @IsNumber()
  @IsNotEmpty()
  pay: number;

  @IsArray()
  @IsNotEmpty()
  location: string[];

  @IsNotEmpty()
  @Transform(({ value }) =>
    value.map((item) => new mongoose.Types.ObjectId(item)),
  )
  field: mongoose.Types.ObjectId[];
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { JobService } from './job.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import StringArrayToObjectId from 'src/pipes/stringArrayToObjectId';

@Controller('job')
export class JobController {
  constructor(private jobService: JobService) {}

  @Get()
  async getAll() {
    return await this.jobService.getAll();
  }

  @Post()
  @UsePipes(new StringArrayToObjectId('location'))
  async create(@Body() job: CreateJobDto) {
    return await this.jobService.create(job);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.jobService.getById(id);
  }
  @Patch(':id')
  async update(@Param('id') id: string, @Body() job: UpdateJobDto) {
    return await this.jobService.update(id, job);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.jobService.delete(id);
  }
}

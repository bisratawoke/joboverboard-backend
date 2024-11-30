import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './schemas/job.schema';
import { Model } from 'mongoose';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private JobModel: Model<Job>) {}
}

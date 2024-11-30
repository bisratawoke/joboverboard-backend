import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from './schemas/job.schema';
import { Model } from 'mongoose';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Location } from 'src/location/schemas/location.schema';
import { Field } from 'src/field/schemas/field.schema';
@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}
  public async create(payload: CreateJobDto) {
    return await this.jobModel.create(payload);
  }

  public async getAll() {
    return await this.jobModel
      .find()
      .populate({ path: 'location', model: Location.name })
      .populate({ path: 'field', model: Field.name })
      .exec();
  }

  public async getById(id: string) {
    return await this.jobModel
      .findById(id)
      .populate({ path: 'location', model: Location.name })
      .populate({ path: 'field', model: Field.name })

      .exec();
  }

  public async update(id: string, payload: UpdateJobDto) {
    return await this.jobModel.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
  }

  public async delete(id: string) {
    return await this.jobModel.deleteOne({ _id: id });
  }
}

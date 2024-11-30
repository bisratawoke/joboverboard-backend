import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { LocationModule } from 'src/location/location.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './schemas/job.schema';

@Module({
  controllers: [JobController],
  providers: [JobService],
  imports: [
    LocationModule,
    MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }]),
  ],
})
export class JobModule {}

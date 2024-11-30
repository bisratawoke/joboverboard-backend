import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';
import { LocationModule } from 'src/location/location.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from './schemas/job.schema';
import { Location, LocationSchema } from '../location/schemas/location.schema';
import { Field, FieldSchema } from 'src/field/schemas/field.schema';

@Module({
  controllers: [JobController],
  providers: [JobService],
  imports: [
    LocationModule,
    MongooseModule.forFeature([
      { name: Location.name, schema: LocationSchema },
      { name: Job.name, schema: JobSchema },
      { name: Field.name, schema: FieldSchema },
    ]),
  ],
})
export class JobModule {}

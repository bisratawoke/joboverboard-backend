import { Module } from '@nestjs/common';
import EthioJobsScraperService from './ethiojob-scraper.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from 'src/job/schemas/job.schema';
import { Field, FieldSchema } from 'src/field/schemas/field.schema';
import { Location, LocationSchema } from 'src/location/schemas/location.schema';

@Module({
  providers: [EthioJobsScraperService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Job.name,
        schema: JobSchema,
      },
      {
        name: Field.name,
        schema: FieldSchema,
      },
      {
        name: Location.name,
        schema: LocationSchema,
      },
    ]),
  ],
})
export class ScraperModule {}

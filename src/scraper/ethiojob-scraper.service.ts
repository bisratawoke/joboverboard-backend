import { Inject, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as fs from 'fs';
import * as path from 'path';
import data from './ethiojobs.data';
import { InjectModel } from '@nestjs/mongoose';
import { Job } from 'src/job/schemas/job.schema';
import { Model } from 'mongoose';
import { Field } from 'src/field/schemas/field.schema';
import { Location } from 'src/location/schemas/location.schema';
import { FieldService } from 'src/field/field.service';
@Injectable()
export default class EthioJobsScraperService {
  constructor(
    @InjectModel(Job.name) private readonly jobModel: Model<Job>,
    @InjectModel(Field.name) private readonly fieldModel: Model<Field>,
    @InjectModel(Location.name) private readonly LocationModel: Model<Location>,
    private fieldService: FieldService,
  ) {}
  @Cron(CronExpression.EVERY_SECOND)
  async etl() {
    console.log('ethiojobs scraper');
    const data = await this.extract();
    const transformedData = await this.transform(data);
    console.log(transformedData[0]);
  }

  async fetch(modelName: string, fieldName: string, value: string) {
    return await this[`${fieldName}`].find({ [`${fieldName}`]: value });
  }

  async createOrFetchField(fields) {
    const result = fields.map(async (field) => {
      let result = await this.fetch('fieldModel', 'name', field.name);

      if (!result) {
      }

      return result;
    });
  }

  async createOrFetchLocation() {}
  async transform(data) {
    const initialData = data.pageProps.initialData.map(async (item) => {
      const fields = await item.field.map(async (field) => {});
      return {
        title: item.title,
        description: item.description,
        field: item.catalogs,
        workplace: item.location_type,
        location: {
          country: item.country,
          city: item.city,
        },
      };
    });

    return initialData;
  }

  async load(data) {}

  async extract() {
    return data;
  }
}

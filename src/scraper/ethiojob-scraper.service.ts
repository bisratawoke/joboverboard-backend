import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as fs from 'fs';
import * as path from 'path';
import data from './ethiojobs.data';
@Injectable()
export default class EthioJobsScraperService {
  //   @Cron(CronExpression.EVERY_SECOND)
  //   async print() {
  //     console.log('ethiojobs scraper');
  //     const data = await this.extract();
  //     const result = data.pageProps.initialData.map((item) => ({
  //       title: item.title,
  //       description: item.description,
  //     }));
  //     console.log(result);
  //   }
  //   async extract() {
  //     return data;
  //   }
}

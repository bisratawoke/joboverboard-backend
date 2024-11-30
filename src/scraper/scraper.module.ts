import { Module } from '@nestjs/common';
import EthioJobsScraperService from './ethiojob-scraper.service';

@Module({
  providers: [EthioJobsScraperService],
})
export class ScraperModule {}

import { Module } from '@nestjs/common';
import { JobModule } from './job/job.module';
import { LocationModule } from './location/location.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { ScraperModule } from './scraper/scraper.module';
import { FieldModule } from './field/field.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI, {
      dbName: process.env.DATATBASE_NAME,
      auth: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
      },
    }),
    JobModule,
    LocationModule,
    ScraperModule,
    FieldModule,
  ],
})
export class AppModule {}

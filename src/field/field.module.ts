import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Field, FieldSchema } from './schemas/field.schema';

@Module({
  providers: [FieldService],
  controllers: [FieldController],
  imports: [
    MongooseModule.forFeature([{ name: Field.name, schema: FieldSchema }]),
  ],
})
export class FieldModule {}

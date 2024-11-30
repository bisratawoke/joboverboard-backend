import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Location } from 'src/location/schemas/location.schema';

export enum SENIORITY {
  JUNIOR = 'Junior',
  MID_SENIOR = 'Mid_senior',
  SENIOR = 'Senior',
}

export enum WORKPLACE {
  REMOTE = 'Remote',
  HYBRID = 'Hybrid',
  ON_SITE = 'Onsite',
}

@Schema()
export class Job extends Document {
  @Prop({ required: true, type: String })
  title: string;
  @Prop({
    type: [
      { type: mongoose.Types.ObjectId, required: true, ref: Location.name },
    ],
  })
  location: string[];
  seniority: SENIORITY;
  pay: number;
}

export const JobSchema = SchemaFactory.createForClass(Job);

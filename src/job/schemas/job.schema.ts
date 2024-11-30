import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Job extends Document {
  @Prop({ required: true, type: String })
  title: string;
}

export const JobSchema = SchemaFactory.createForClass(Job);

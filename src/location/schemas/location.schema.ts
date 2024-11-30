import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Location extends Document {
  @Prop({ required: true, type: String, unique: true })
  country: string;
  @Prop({ required: true, type: String, unique: true })
  city: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);

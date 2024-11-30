import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Location extends Document {
  @Prop({ required: true, type: String })
  country: string;
  @Prop({ required: true, type: String })
  city: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);

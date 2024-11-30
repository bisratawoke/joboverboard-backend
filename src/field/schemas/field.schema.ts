import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Field extends Document {
  @Prop({ required: true, unique: true })
  name: string;
}

export const FieldSchema = SchemaFactory.createForClass(Field);

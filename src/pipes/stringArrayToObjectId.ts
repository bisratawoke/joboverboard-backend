import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { Types } from 'mongoose';

export default class StringArrayToObjectId implements PipeTransform {
  private fieldName: string;
  constructor(fieldName: string) {
    this.fieldName = fieldName;
  }
  transform(value: any, metadata: ArgumentMetadata) {
    return {
      ...value,
      [`${this.fieldName}`]: value[`${this.fieldName}`].map(
        (data: string) => new Types.ObjectId(data),
      ),
    };
  }
}

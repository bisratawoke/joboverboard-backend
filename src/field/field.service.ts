import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Field } from './schemas/field.schema';
import { Model } from 'mongoose';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';

@Injectable()
export class FieldService {
  constructor(@InjectModel(Field.name) private fieldModel: Model<Field>) {}

  async getAll() {
    return await this.fieldModel.find();
  }

  async getById(id: string) {
    return await this.fieldModel.findById({ _id: id });
  }

  async delete(id: string) {
    return await this.fieldModel.deleteOne({ _id: id });
  }

  async create(payload: CreateFieldDto) {
    return await this.fieldModel.create(payload);
  }

  async update(id: string, payload: UpdateFieldDto) {
    return await this.fieldModel.findByIdAndUpdate({ _id: id }, payload, {
      new: true,
    });
  }
}

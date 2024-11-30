import { Injectable } from '@nestjs/common';
import { Location } from './schemas/location.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
@Injectable()
export class LocationService {
  constructor(
    @InjectModel(Location.name) private LocationModel: Model<Location>,
  ) {}

  public async create(payload: CreateLocationDto) {
    return this.LocationModel.create(payload);
  }

  public async readAll() {
    return await this.LocationModel.find();
  }

  public async readOne(id: string) {
    return await this.LocationModel.findById({ _id: id });
  }

  public async update(payload: UpdateLocationDto, id: string) {
    return await this.LocationModel.findByIdAndUpdate(
      { _id: id },
      { ...payload },
      { new: true },
    );
  }

  public async delete(id: string) {
    return await this.LocationModel.findByIdAndDelete({ _id: id });
  }
}

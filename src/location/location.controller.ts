import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Controller('location')
export class LocationController {
  constructor(private LocationService: LocationService) {}

  @Get()
  async getAll() {
    return this.LocationService.readAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.LocationService.readOne(id);
  }

  @Post()
  async create(@Body() newLocation: CreateLocationDto) {
    return this.LocationService.create(newLocation);
  }

  @Patch(':id')
  async update(
    @Param('id') locationId: string,
    @Body() payload: UpdateLocationDto,
  ) {
    return this.LocationService.update(payload, locationId);
  }

  @Delete(':id')
  async delete(@Param('id') locationId: string) {
    return this.LocationService.delete(locationId);
  }
}

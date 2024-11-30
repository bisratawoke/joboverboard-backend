import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FieldService } from './field.service';
import { CreateFieldDto } from './dto/create-field.dto';
import { UpdateFieldDto } from './dto/update-field.dto';

@Controller('field')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Get()
  async getAll() {
    return this.fieldService.getAll();
  }

  @Get(':id')
  async getById(id: string) {
    return this.fieldService.getById(id);
  }

  @Post()
  async create(@Body() payload: CreateFieldDto) {
    return this.fieldService.create(payload);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() payload: UpdateFieldDto) {
    return this.fieldService.update(id, payload);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.fieldService.delete(id);
  }
}

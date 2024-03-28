import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';
import { Cars } from 'src/models/cars.model';

@Controller('cars')
export class CarsController {
  constructor(private service: CarsService) {}

  @Get()
  async getCars(): Promise<Cars[]> {
    return await this.service.getCasrs();
  }

  @Get(':id')
  async getCarById(@Param('id') id: string): Promise<Cars> {
    return await this.service.getById(id);
  }
}

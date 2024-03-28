import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cars, CarsSchema } from 'src/models/cars.model';
import { CarsController } from './cars.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cars.name, schema: CarsSchema }]),
  ],
  providers: [CarsService],
  controllers: [CarsController],
})
export class CarsModule {}

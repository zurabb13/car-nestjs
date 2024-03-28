import { Module } from '@nestjs/common';
import { CarsResolver } from './cars.resolver';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cars, CarsSchema } from 'src/models/cars.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cars.name, schema: CarsSchema }]),
  ],
  providers: [CarsResolver, CarsService],
})
export class CarsModule {}

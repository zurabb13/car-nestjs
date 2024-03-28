import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cars, CarsDocument } from 'src/models/cars.model';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Cars.name) private model: Model<CarsDocument>) {}

  async getCasrs(): Promise<Cars[]> {
    return await this.model.find().select('-_id').exec();
  }

  async getById(id: string): Promise<Cars> {
    return await this.model.findById(id).exec();
  }
}

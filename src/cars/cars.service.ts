import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cars, CarsDocument } from 'src/models/cars.model';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Cars.name) private model: Model<CarsDocument>) {}

  async getCasrs(): Promise<Cars[]> {
    return await this.model.find().exec();
  }

  async getById(id: string): Promise<Cars> {
    return await this.model.findOne({ where: { _id: id } }).exec();
  }
}

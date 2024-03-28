import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type CarsDocument = Cars & Document;

@Schema()
export class Cars {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Prop()
  description: string;

  @Prop()
  year: number;

  @Prop()
  price: number;

  @Prop()
  image: string;

  @Prop()
  name: string;

  @Prop()
  phone: number;

  @Prop()
  manufacturer: string;

  @Prop()
  model: string;

  @Prop()
  category: string;

  @Prop()
  mileage: string;

  @Prop()
  fuel: string;

  @Prop()
  engine: string;

  @Prop()
  cylinders: string;

  @Prop()
  gearboxtype: number;

  @Prop()
  drive: string;

  @Prop()
  doors: number;

  @Prop()
  airbags: string;

  @Prop()
  wheel: string;

  @Prop()
  color: string;

  @Prop()
  interiormaterial: string;

  @Prop()
  exchange: boolean;

  @Prop()
  technicalinspection: boolean;

  @Prop()
  catalyst: boolean;

  @Prop()
  comport: string;

  @Prop()
  interior: string;
}

export const CarsSchema = SchemaFactory.createForClass(Cars);

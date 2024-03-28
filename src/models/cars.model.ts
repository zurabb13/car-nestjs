import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type CarsDocument = Cars & Document;
@ObjectType()
@Schema()
export class Cars {
  @Field()
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  _id: string;

  @Field(() => String)
  @Prop()
  description: string;

  @Field(() => Int)
  @Prop()
  year: number;

  @Field(() => Int)
  @Prop()
  price: number;

  @Field(() => String)
  @Prop()
  image: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Int)
  @Prop()
  phone: number;

  @Field(() => String)
  @Prop()
  manufacturer: string;

  @Field(() => String)
  @Prop()
  model: string;

  @Field(() => String)
  @Prop()
  category: string;

  @Field(() => String)
  @Prop()
  mileage: string;

  @Field(() => String)
  @Prop()
  fuel: string;

  @Field(() => String)
  @Prop()
  engine: string;

  @Field(() => String)
  @Prop()
  cylinders: string;

  @Field(() => Int)
  @Prop()
  gearboxtype: number;

  @Field(() => String)
  @Prop()
  drive: string;

  @Field(() => Int)
  @Prop()
  doors: number;

  @Field(() => String)
  @Prop()
  airbags: string;

  @Field(() => String)
  @Prop()
  wheel: string;

  @Field(() => String)
  @Prop()
  color: string;

  @Field(() => String)
  @Prop()
  interiormaterial: string;

  @Field(() => Boolean)
  @Prop()
  exchange: boolean;

  @Field(() => Boolean)
  @Prop()
  technicalinspection: boolean;

  @Field(() => Boolean)
  @Prop()
  catalyst: boolean;

  @Field(() => String)
  @Prop()
  comport: string;

  @Field(() => String)
  @Prop()
  interior: string;
}

export const CarsSchema = SchemaFactory.createForClass(Cars);

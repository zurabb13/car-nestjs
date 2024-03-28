import { Args, Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';

import { Cars } from 'src/models/cars.model';

@Resolver(() => Cars)
export class CarsResolver {
  constructor(private service: CarsService) {}

  @Query(() => [Cars])
  async getCars(): Promise<Cars[]> {
    return await this.service.getCasrs();
  }

  @Query(() => Cars)
  async getCarsById(@Args('id') id: string): Promise<Cars> {
    return await this.service.getById(id);
  }
}

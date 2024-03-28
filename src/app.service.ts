import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getAll() {
    return 'hello world';
  }
}

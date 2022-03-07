import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAllCustomers(): string[] {
    return ['Customer One', 'Customer Two'];
  }
}

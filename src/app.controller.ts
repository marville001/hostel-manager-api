import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('customers')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string[] {
    return this.appService.getAllCustomers();
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}

import { Module } from '@nestjs/common';
import { HostelsController } from './hostels.controller';
import { hostelsProviders } from './hostels.providers';
import { HostelsService } from './hostels.service';

@Module({
  controllers: [HostelsController],
  providers: [...hostelsProviders, HostelsService],
})
export class HostelsModule {}

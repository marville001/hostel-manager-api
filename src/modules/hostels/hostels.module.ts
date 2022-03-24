import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { HostelsController } from './hostels.controller';
import { hostelsProviders } from './hostels.providers';
import { HostelsService } from './hostels.service';

@Module({
  imports:[UsersModule],
  controllers: [HostelsController],
  providers: [HostelsService, ...hostelsProviders],
})
export class HostelsModule {}

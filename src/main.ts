import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { env } from 'process';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Global prefix
  app.setGlobalPrefix('api/v1');

  // handle all user input validation globally
  // app.useGlobalPipes(new ValidateInputPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.enableCors();

  await app.listen(process.env.PORT || 5000);
}
bootstrap();

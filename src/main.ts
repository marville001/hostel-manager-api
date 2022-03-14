import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

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

  await app.listen(5000);
}
bootstrap();

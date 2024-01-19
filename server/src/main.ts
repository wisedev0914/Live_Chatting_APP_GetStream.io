import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { AutoPropertyValidationPipe } from './utils/auto-property-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors();
  app.useGlobalPipes(
    new AutoPropertyValidationPipe(),
    new ValidationPipe()
  );


  app.use('/assets', express.static('src/assets'));

  await app.listen(4000, '0.0.0.0', () => {
    console.log('Server is running on port 4000');
  });
}
bootstrap();

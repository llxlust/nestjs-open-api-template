import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './middlewares/exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // this line for catch errors from pipeline or dto
  app.useGlobalPipes(new ValidationPipe({stopAtFirstError:true}))
  // this line for use custom error handler middleware for all route
  app.useGlobalFilters(new HttpExceptionFilter)
  await app.listen(3000);
}
bootstrap();

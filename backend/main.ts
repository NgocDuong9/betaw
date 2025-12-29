
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors(); // Cho phép Frontend gọi API
  await app.listen(3000);
  console.log('--- BETAWATCH BACKEND OPERATIONAL ---');
  console.log('Vault running on: http://localhost:3000/api');
}
bootstrap();

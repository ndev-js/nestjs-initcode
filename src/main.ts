import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serverPort = app.get(AppConfigService).port;
  await app.listen(serverPort);
}
bootstrap();

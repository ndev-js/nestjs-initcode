import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const { port, nodeEnv, DB_PORT, DB_USERNAME, DB_NAME } =
    app.get(AppConfigService);

  const config = {
    port,
    nodeEnv,
    DB_PORT,
    DB_USERNAME,
    DB_NAME,
  };

  await app.listen(port);
  logger.debug(
    `Running App with the following configuration: ${JSON.stringify(config, null, 2)}`,
  );
}
bootstrap();

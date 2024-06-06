import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvModule } from './config/config.module';
import { AppConfigService } from './config';

@Module({
  imports: [EnvModule],
  controllers: [AppController],
  providers: [AppService, AppConfigService],
})
export class AppModule {
  constructor(private appConfigService: AppConfigService) {
    const APP_PORT = this.appConfigService.port;
    const Environment = this.appConfigService.nodeEnv;
    console.log(`Running App on Port ${APP_PORT}`);
    console.warn(`Running App on  ${Environment}`);
  }
}

/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get(key: string): string {
    return this.configService.get<string>(key);
  }

  get port(): number {
    return this.configService.get<number>('APP_PORT');
  }

  get nodeEnv(): string {
    return this.configService.get<string>('NODE_ENV');
  }
}

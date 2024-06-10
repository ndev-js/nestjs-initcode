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
  get DB_PORT(): number {
    return this.configService.get<number>('DB_PORT');
  }
  get DB_USERNAME(): number {
    return this.configService.get<number>('DB_USERNAME');
  }
  get DB_PASSWORD(): number {
    return this.configService.get<number>('DB_PASSWORD');
  }
  get DB_NAME(): string {
    return this.configService.get<string>('DB_NAME');
  }
}

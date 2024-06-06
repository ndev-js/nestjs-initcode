/* eslint-disable prettier/prettier */
// env/env.config.ts

import { IsNumber, IsIn } from 'class-validator';

export class EnvConfig {
  @IsIn(['development', 'production', 'test', 'provision'])
  NODE_ENV: string;

  @IsNumber()
  APP_PORT: number;
}

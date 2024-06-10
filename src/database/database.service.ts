import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit(): Promise<void> {
    try {
      this.logger.fatal('Connecting to database...');
      if (this.connection.isConnected) {
        this.logger.debug('connected to the database');
      } else {
        this.logger.error('Error connecting to the database');
      }
    } catch (error) {
      this.logger.error('Database Connection Error: ', error);
    }
  }
}

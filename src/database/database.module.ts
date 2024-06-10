import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './database.config';
import { DatabaseService } from './database.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig)],
  providers: [DatabaseService],
  exports: [TypeOrmModule, DatabaseService],
})
export class DatabaseModule {}

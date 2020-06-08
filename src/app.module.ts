import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreService } from './services/core/core.service';
import { FileService } from './services/file/file.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CoreService, FileService],
})
export class AppModule {}

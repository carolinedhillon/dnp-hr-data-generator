import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreService } from './services/core/core.service';
import { FileService } from './services/file/file.service';
import { PayrollService } from './services/payroll/payroll.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CoreService, FileService, PayrollService],
})
export class AppModule {}

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FileService } from './services/file/file.service';
import * as moment from 'moment';
@Controller()
export class AppController {

  constructor(private readonly appService: AppService,
    private readonly file: FileService) {}

  @Get('/core/:id?')
  coreData(@Param() params): string {
    const num = parseInt(params.id) || 100;
    const records = this.appService.generate(num);
    const fileName = 'CoreHRExtract';
    this.file.save(records.workers,'CoreHRExtract',['csv','json']);
    this.file.save(records.payroll,`Payroll`,['csv','json']);
    return `Employee core and payroll data generated ... `;
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FileService } from './services/file/file.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService,
    private readonly file: FileService) {}

  @Get('/core/:id?')
  coreData(@Param() params): string {
    const num = parseInt(params.id) || 100;
    const records = this.appService.generate(num);
    const fileName = 'CoreHRExtract';
    this.file.save(records,fileName,['csv','json']);
    return `${num} records written to ${fileName}`;
  }
}

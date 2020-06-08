import { Injectable } from '@nestjs/common';
import { CoreService } from './services/core/core.service';
import { Worker } from './model/core';


@Injectable()
export class AppService {

  constructor(   private coreService: CoreService){}
  generate(limit:number): Worker[] {
    return this.coreService.generate(limit);

  }
}
 
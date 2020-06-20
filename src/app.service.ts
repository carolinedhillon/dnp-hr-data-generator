import { Injectable } from '@nestjs/common';
import { CoreService } from './services/core/core.service';
import { Worker } from './model/core';
import { PayrollService, Payroll } from './services/payroll/payroll.service';


@Injectable()
export class AppService {

  constructor(   private coreService: CoreService,
    private payrollService: PayrollService){}
  generate(limit:number): {workers: Worker[],payroll: Payroll[]} {
    const workers =  this.coreService.generate(limit);
    const payroll = this.payrollService.generate(workers);
    return {workers: workers, payroll: payroll};
  }
}
 
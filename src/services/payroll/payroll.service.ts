import { Injectable } from '@nestjs/common';
import { Worker } from 'src/model/core';
import * as moment from 'moment';
import * as faker from 'faker';
@Injectable()
export class PayrollService {

    constructor(){

    }

    generate(workers: Worker[], 
        start: string = moment().startOf('month').format('YYYY-MM-DD'),
        end: string = moment().endOf('month').format('YYYY-MM-DD')){
        let payrollList : Payroll[] = []; 
        workers.forEach(worker=>{
            payrollList.push({
                id: worker.id,
                date: { start: start, end: end},
                amount: {
                    total: 0,
                    net: 0,
                    ni: 0,
                    tax: 0
                },
                taxCode: faker.random.alphaNumeric(6).toUpperCase()
            })
        });
        return payrollList;
    }


}

export interface Payroll{
    id: string;
    date: {start: string, end: string};
    taxCode: string;
    amount: Payroll.Amount;    
}

export namespace Payroll { 
    export interface Amount{
        total: number;
        net: number;
        tax: number;
        ni: number;
    }
}
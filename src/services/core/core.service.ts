import { Injectable, Logger } from '@nestjs/common';
import  * as faker from 'faker';
import * as moment from 'moment'
import {Worker, Company} from 'src/model/core';
 


@Injectable()
export class CoreService {
  constructor() {}
 
  private readonly logger = new Logger(CoreService.name);

  generate(limit: number): Worker[] {
    let workerList: Worker[] = [];
    for (let row = 0; row < limit; row++) {
        const name: Worker.Name = {firstName: faker.name.firstName(),lastName:faker.name.lastName(), title: <any>faker.name.prefix()};
        const country = faker.random.arrayElement(Object.keys(Company.offices));
        const department = this.valueFromEnum(Worker.Departments);
        // this.logger.log(`department :: ${department}`);
        const departmentObj = Company.salaryMap[department] || Company.salaryMap['Default'];    

        const level = faker.random.arrayElement(Object.keys(departmentObj));
        const role = departmentObj[level]['role'];
        const salary: Worker.Salary = this.calculateSalary(departmentObj[level]);

        
        workerList.push({
            id: `EM-${("0000"+row).slice(-5)}`,
            name: name,
            personalDetails: {
                dateOfBirth: moment(faker.date.between('1950-01-01','2000-01-01'),'YYYY-MM-DD').format('YYYY-MM-DD'),
                deceased: false,
                martialStatus: this.valueFromEnum(Worker.MartialStatus),
                spouce: `${this.valueFromEnum(Worker.Title)} ${faker.name.firstName()} ${faker.random.arrayElement([name.lastName, faker.name.lastName()])}`
            },
            address:{
                country: country,
                city: faker.random.arrayElement(Company.offices[country]),
                postCode: faker.address.zipCode(),
                streetName: faker.address.streetAddress()
            },
            department: department,
            level: level,
            role: role,
            salary: salary
        })
    }
    return workerList;
  }

  calculateSalary(roleObj: any): Worker.Salary{
    let salary = <Worker.Salary>{
      basic: faker.random.number({min: roleObj.salary.min, max: roleObj.salary.max, precision:1}),
      frequency: this.valueFromEnum(Worker.SalaryFrequency)
    }
    if(roleObj.bonus) salary.bonus = faker.random.number({min: roleObj.bonus.min, max: roleObj.bonus.max, precision:0.1});
    // if(roleObj.commissions) salary.commissions = faker.random.number({min: roleObj.commissions.min, max: roleObj.commissions.max, precision:0.1});
    if(roleObj.commissions) salary.commissions = roleObj.commissions;

    
    return salary;
  }

  valueFromEnum(enumName){
    const objValues = Object.values(enumName);
    return <any>faker.random.arrayElement(objValues.slice(0,objValues.length/2));
  }
}

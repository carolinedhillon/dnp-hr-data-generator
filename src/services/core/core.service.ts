import { Injectable, Logger } from '@nestjs/common';
import  * as faker from 'faker';
import * as moment from 'moment'
import {Worker} from 'src/model/core';
 

export const offices = {
  'India': ['New Delhi', 'Mumbai','Hyderbad','Pune'],
  'United Kingdom': ['London','Manchester','Leeds'],
  'United Stated of America': ['New York','San Franciso','Los Angeles'],
  'France': ['Paris','Lyon']
};

export const salaryMap = {
  'Human Resources': {
    L1: { role: 'Coordinator', salary: {min: 20000, max: 40000}, bonus: { min: 0.1, max:1} },
    L2: { role: 'Advisor', salary: {min: 30000, max: 50000}, bonus: { min: 0.1, max:1} },
    L3: { role: 'Manager', salary: {min: 40000, max: 60000}, bonus: { min: 0.1, max:1} },
    L4: { role: 'Senior Manager', salary: {min: 50000, max: 70000}, bonus: { min: 0.1, max:1} },
    L5: { role: 'Director', salary: {min: 70000, max: 100000}, bonus: { min: 0.1, max:1} }
  },
  'Sales': {
    L1: { role: 'Junior Sales', salary: {min: 20000, max: 40000}, commissions: 0.4},
    L2: { role: 'Sales Consultant', salary: {min: 30000, max: 50000}, commissions: 0.4 },
    L3: { role: 'Sales Manager', salary: {min: 40000, max: 60000}, commissions: 0.4 },
    L4: { role: 'Sales Country Manager', salary: {min: 50000, max: 70000}, commissions: 0.3 },
    L5: { role: 'Sales Regional Director', salary: {min: 70000, max: 100000}, commissions: 0.3 }
  },
  'Default': {
    L1: { role: 'Coordinator', salary: {min: 20000, max: 40000}, bonus: { min: 0.1, max:1} },
    L2: { role: 'Advisor', salary: {min: 30000, max: 50000}, bonus: { min: 0.1, max:1} },
    L3: { role: 'Manager', salary: {min: 40000, max: 60000}, bonus: { min: 0.1, max:1} },
    L4: { role: 'Senior Manager', salary: {min: 50000, max: 70000}, bonus: { min: 0.1, max:1} },
    L5: { role: 'Director', salary: {min: 70000, max: 100000}, bonus: { min: 0.1, max:1} }
  },
};

@Injectable()
export class CoreService {
  constructor() {}
 
  private readonly logger = new Logger(CoreService.name);

  generate(limit: number): Worker[] {
    let workerList: Worker[] = [];
    for (let row = 0; row < limit; row++) {
        const name: Worker.Name = {firstName: faker.name.firstName(),lastName:faker.name.lastName(), title: <any>faker.name.prefix()};
        const employeeID = faker.internet.password(4, false, /[0-9]/);
        const country = faker.random.arrayElement(Object.keys(offices));
        const department = this.valueFromEnum(Worker.Departments);
        // this.logger.log(`department :: ${department}`);
        const departmentObj = salaryMap[department] || salaryMap['Default'];    

        const level = faker.random.arrayElement(Object.keys(departmentObj));
        const role = departmentObj[level]['role'];
        const salary: Worker.Salary = this.calculateSalary(departmentObj[level]);
        
        workerList.push({
            employeeID: employeeID,
            name: name,
            personalDetails: {
                dateOfBirth: moment(faker.date.between('1950-01-01','2000-01-01'),'YYYY-MM-DD').format('YYYY-MM-DD'),
                deceased: false,
                maritalStatus: this.valueFromEnum(Worker.MaritalStatus),
                spouse: `${this.valueFromEnum(Worker.Title)} ${faker.name.firstName()} ${faker.random.arrayElement([name.lastName, faker.name.lastName()])}`
            },
            address:{
                country: country,
                city: faker.random.arrayElement(offices[country]),
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

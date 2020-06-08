import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as jsonexport from 'jsonexport';
@Injectable()
export class FileService {


    baseFolder = 'data';

    save(records:any[], fileName: string, types?:String[]| string){
        types = types || 'csv';
        types = Array.isArray(types) ? types : [types];

        types.forEach(fileType=>{
            let fileURL = `${this.baseFolder}/${fileName}.${fileType}`;
            switch(fileType){
                case 'csv': jsonexport(records,(err,csv)=>fs.writeFile(`${fileURL}`,csv,err=>console.log)); break;
                case 'json': fs.writeFileSync(`${fileURL}`,JSON.stringify(records)); break;
            }
        })

        
        
    }
}

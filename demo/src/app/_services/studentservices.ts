import { Injectable } from '@angular/core';
import { IStudent } from '../models/istudent';

@Injectable({
  providedIn: 'root',
})
export class Studentservices {


    stds:IStudent[] = [
       {id:1,name:"Ahmed",age:20},
       {id:2,name:"Mohamed",age:22},
       {id:3,name:"Sara",age:21},
       {id:4,name:"Ali",age:23},
     ];

     getAll(){
      return this.stds;
     }

     add(student:IStudent){
      student.id = this.stds.length+1;
      this.stds.push(student);
     }

     getById(id:number){
      return this.stds.find(s=>s.id == id) || null;
     }
    

}

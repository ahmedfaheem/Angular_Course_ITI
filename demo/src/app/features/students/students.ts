import { Component, signal } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { StudentfilterPipe } from '../../shared/studentfilter-pipe';
import { Test4 } from "../test/test4/test4";
import { Test5 } from "../test/test5/test5";

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule, StudentfilterPipe, Test4, Test5],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {


  // stds = signal<IStudent[]>([
  //   {id:1,name:"Ahmed",age:20},
  //   {id:2,name:"Mohamed",age:22},
  //   {id:3,name:"Sara",age:21},
  //   {id:4,name:"Ali",age:23},
  // ]);
 
  // addStd(name:string,age:any){
  //  // console.log(age);
  //   if(name.trim() == '' || age.trim() == '') return;
  //  let id = this.stds().length+1;
  //   age = Number(age);
  //   this.stds.update(stds=>stds=[...stds,{id,name,age}]);
  // }


   stds:IStudent[] = [
    {id:1,name:"Ahmed",age:20},
    {id:2,name:"Mohamed",age:22},
    {id:3,name:"Sara",age:21},
    {id:4,name:"Ali",age:23},
  ];
 
   add(student:IStudent){
   // console.log(age);
    student.id = this.stds.length+1;
    this.stds.push(student);
   
  }


  bdate= new Date();
  test = 10;

  item:IStudent|null = {id:0,name:"",age:0}; 

}

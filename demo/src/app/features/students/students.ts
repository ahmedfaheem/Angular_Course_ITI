import { Component, signal } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { StudentfilterPipe } from '../../shared/studentfilter-pipe';

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule, StudentfilterPipe],
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

   stdsTemp:IStudent =  {id:0,name:"",age:0};

   stds:IStudent[] = [
    {id:1,name:"Ahmed",age:20},
    {id:2,name:"Mohamed",age:22},
    {id:3,name:"Sara",age:21},
    {id:4,name:"Ali",age:23},
  ];
 
   addStd(){
   // console.log(age);
    if(this.stdsTemp.age == 0) return;
    let idx = this.stds.length+1;
    this.stds.push({id:idx, name:this.stdsTemp.name, age:this.stdsTemp.age})
    this.stdsTemp.age = 0;
    this.stdsTemp.name = "";
  }


  bdate= new Date();
  test = 10;

}

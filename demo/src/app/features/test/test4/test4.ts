import { Component, inject, output } from '@angular/core';
import { IStudent } from '../../../models/istudent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Studentservices } from '../../../_services/studentservices';

@Component({
  selector: 'app-test4',
  imports: [CommonModule, FormsModule,],
  templateUrl: './test4.html',
  styleUrl: './test4.css',
})
export class Test4 {
  onStudentAdd=output<IStudent>();
     stdsTemp:IStudent =  {id:0,name:"",age:0};
    stdServ  = inject(Studentservices);

    addStd(){
  //  // console.log(age);
  //   if(this.stdsTemp.age == 0) return;
  //   let idx = this.stds.length+1;
  //   this.stds.push({id:idx, name:this.stdsTemp.name, age:this.stdsTemp.age})
  //   this.stdsTemp.age = 0;
  //   this.stdsTemp.name = "";

    if(this.stdsTemp.age == 0) return;
  //  this.onStudentAdd.emit({id:0, name:this.stdsTemp.name, age:this.stdsTemp.age});
    this.stdServ.add({id:0, name:this.stdsTemp.name, age:this.stdsTemp.age});
    this.stdsTemp.age = 0;
     this.stdsTemp.name = "";
  }


  
}

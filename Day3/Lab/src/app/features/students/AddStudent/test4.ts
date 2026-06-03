import { Component, effect, inject, input, output } from '@angular/core';
import { IStudent } from '../../../models/istudent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentServices } from '../../../service/student-services';

@Component({
  selector: 'app-test4',
  imports: [CommonModule, FormsModule,],
  templateUrl: './test4.html',
  styleUrl: './test4.css',
})
export class Test4 {
  
  stdServ = inject(StudentServices);
  stdsTemp:IStudent =  {id:0,name:"",age:0};
  itemID = input<number>(-1);
  resetEditID = output<void>();

  ngOnChanges(){
     const selectedStudent = this.stdServ.getById(this.itemID());
     console.log(this.itemID());
      if (selectedStudent) {
        this.stdsTemp = { id: selectedStudent.id, name: selectedStudent.name, age: selectedStudent.age };
      } else {
        this.stdsTemp = { id: 0, name: "", age: 0 };
      } 
     }

 
    addStd(){
    if(this.stdsTemp.name.trim()  == '' || this.stdsTemp.age == 0) return;
    this.stdServ.add({id:this.stdServ.getLength() + 1, name:this.stdsTemp.name, age:this.stdsTemp.age});
    this.stdsTemp = { id:0, name:"", age:0 };
    }

  editStd(){
    if(this.itemID() == -1 || this.stdsTemp.name.trim()  == '' || this.stdsTemp.age == 0) return;
    this.stdServ.edit(this.stdsTemp);
    this.stdsTemp = { id:0, name:"", age:0 };
    this.resetEditID.emit();
  }



  

}

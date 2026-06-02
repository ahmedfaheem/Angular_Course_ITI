import { Component, effect, input, output } from '@angular/core';
import { IStudent } from '../../../models/istudent';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test4',
  imports: [CommonModule, FormsModule,],
  templateUrl: './test4.html',
  styleUrl: './test4.css',
})
export class Test4 {
  onStudentAdd=output<IStudent>();
  onStudentEdit=output<IStudent>();

  stdsTemp:IStudent =  {id:0,name:"",age:0};
  item = input<IStudent|null>(null);

  constructor(){
    effect(() => {
      const selectedStudent = this.item();
      if (selectedStudent) {
        this.stdsTemp = { id: selectedStudent.id, name: selectedStudent.name, age: selectedStudent.age };
      } else {
        this.stdsTemp = { id: 0, name: "", age: 0 };
      }
    });
  }

    addStd(){
    if(this.stdsTemp.name.trim()  == '' || this.stdsTemp.age == 0) return;
    this.onStudentAdd.emit({id:0, name:this.stdsTemp.name, age:this.stdsTemp.age});
    this.stdsTemp = { id:0, name:"", age:0 };
  }

  editStd(){
    if(!this.item() || this.stdsTemp.name.trim()  == '' || this.stdsTemp.age == 0) return;
    this.onStudentEdit.emit(this.stdsTemp);
    this.stdsTemp = { id:0, name:"", age:0 };
  }



  

}

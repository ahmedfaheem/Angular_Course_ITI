import { Component } from '@angular/core';
import { Student } from '../../../models/student';
import { IStudent } from '../../../models/istudent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test2',
  imports: [FormsModule],
  templateUrl: './test2.html',
  styleUrl: './test2.css',
})
export class Test2 {
  //std = new Student(1, 'Ahmed', 20);

  // using interface instead of class to create an object of type student
  std:IStudent = {id:1,name:'Ahmed',age:20};
}

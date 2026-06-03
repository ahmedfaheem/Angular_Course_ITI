import { Component, inject, input, InputSignal, OnChanges } from '@angular/core';
import { IStudent } from '../../../models/istudent';
import { Studentservices } from '../../../_services/studentservices';

@Component({
  selector: 'app-test5',
  imports: [],
  templateUrl: './test5.html',
  styleUrl: './test5.css',
})
export class Test5 implements OnChanges{
  // student = input<IStudent|null>({id:0,name:"",age:0}); // input signal
  studentID = input<number>(0); // input signal
  student:IStudent|null = null;
  stdServices = inject(Studentservices);

  // when input signal changes this code excuted 
  ngOnChanges(){
    this.student = this.stdServices.getById(this.studentID());
  }

}

import { Component, inject, input, InputSignal } from '@angular/core';
import { IStudent } from '../../../models/istudent';
import { StudentServices } from '../../../service/student-services';

@Component({
  selector: 'app-test5',
  imports: [],
  templateUrl: './test5.html',
  styleUrl: './test5.css',
})
export class Test5 {
  studentID = input<number>(-1); // input signal
  stdServ = inject(StudentServices);
  student: IStudent|null = null;

  ngOnChanges(){
        this.student = this.stdServ.getById(this.studentID());
  }
}

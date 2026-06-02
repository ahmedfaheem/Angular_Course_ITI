import { Component, input, InputSignal } from '@angular/core';
import { IStudent } from '../../../models/istudent';

@Component({
  selector: 'app-test5',
  imports: [],
  templateUrl: './test5.html',
  styleUrl: './test5.css',
})
export class Test5 {
  student = input<IStudent|null>(); // input signal

}

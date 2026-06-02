import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test1',
  imports: [FormsModule],
  templateUrl: './test1.html',
  styleUrl: './test1.css',
})
export class Test1 {
  x = 90;
  id = signal(0);
  name = signal('Angular');
  age = 10;
  flag= true;
  y= 2;
  z= 50;

  constructor() {

   // this.id.set(3); // to change the value of the signal
     this.id.update((current) => current + 1); // to update the value of the signal based on the current value otherwise in html or ts
  }

   myfun() {
    console.log('Hello from test1');
    
  }

  updateY(val:any){
    console.log(val);
  this.y = val;
  }
}

import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-test3',
  imports: [],
  templateUrl: './test3.html',
  styleUrl: './test3.css',
})
export class Test3 {
  /*
  differ between 
  @Input() -> x = 5;  // which is a normal property and can be used in template and also can be updated from ts file but the change will not reflect in template until we use change detection strategy or markForCheck() method
  input(val)  -> signal which can be used in template and also can be updated from ts file and the change will reflect in template without need to use change detection strategy or markForCheck() method
  
   */
  @Input() x = 5;
  @Input('input_x') x2 = 9;
  z = input(20); // signal 

  /*
   @output() -> allow parent to listen to event emitted from child component and also allow child component to pass data to parent component through event emitter
   EventEmitter -> is a class that allows us to emit events and pass data to parent component through @Output() decorator

  */

  // @Output() onYUpdate:EventEmitter<number> = new EventEmitter<number>();

  // can use output signal instead of EventEmitter but it is not recommended because it is not a standard way to emit events in Angular and also it does not allow us to pass data to parent component through event emitter

  onYUpdate = output<number>();  // output emitter refrence signal

  save(n:number) : void {
    this.onYUpdate.emit(n); // fire event and pass data to parent component
  }
}

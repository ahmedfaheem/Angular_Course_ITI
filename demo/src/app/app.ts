import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test1 } from './features/test/test1/test1';
import { Test2 } from './features/test/test2/test2';
import { Productlist } from "./features/products/productlist/productlist";
import { Students } from "./features/students/students";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test1, Test2, Productlist, Students],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo');
  id = 0;
  name = 'Angular';
  age = 0;
}

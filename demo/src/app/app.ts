import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test1 } from './features/test/test1/test1';
import { Test2 } from './features/test/test2/test2';
import { Productlist } from "./features/products/productlist/productlist";
import { Students } from "./features/students/students";
import { Test3 } from "./features/test/test3/test3";
import { Studentservices } from './_services/studentservices';
import { Header } from "./features/header/header";
import { Footer } from "./features/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test1, Test2, Productlist, Students, Test3, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[{provide: Studentservices, useClass: Studentservices}]

})
export class App {
  protected readonly title = signal('demo');
  id = 0;
  name = 'Angular';
  age = 0;
  myval = 254;
  inputY = 0;
}

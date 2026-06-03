import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from "./features/students/Students/students";
import { Products } from "./features/products/products/products";
import { StudentServices } from './service/student-services';
import { Header } from "./features/header/header";
import { Footer } from "./features/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Students, Products, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [{provide:StudentServices, useClass: StudentServices}],

})
export class App {
  protected readonly title = signal('Lab');
}

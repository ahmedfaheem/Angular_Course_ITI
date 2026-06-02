import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from "./features/students/Students/students";
import { Products } from "./features/products/products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Students, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab');
}

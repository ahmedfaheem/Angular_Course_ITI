import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from "./features/students/students";
import { Products } from './features/products/products';
import { Primeng } from "./features/primeng/primeng";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Students, Products, Primeng],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Lab');
}

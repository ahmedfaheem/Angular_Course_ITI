import { Component, inject, signal } from '@angular/core';
import { IStudent } from '../../../models/istudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Test4 } from "../AddStudent/test4";
import { Test5 } from "../ShowStudent/test5";
import { StudentServices } from '../../../service/student-services';

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule, Test4, Test5],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  itemID:number = -1;
  editItemID:number = -1;

  stdServ = inject(StudentServices);
  stds:IStudent[] = [];
  constructor(){
  this.stds = this.stdServ.getAll();
  }
  

}

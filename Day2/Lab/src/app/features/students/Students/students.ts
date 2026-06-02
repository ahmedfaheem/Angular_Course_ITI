import { Component, signal } from '@angular/core';
import { IStudent } from '../../../models/istudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { Test4 } from "../AddStudent/test4";
import { Test5 } from "../ShowStudent/test5";

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule, Test4, Test5],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {

  item:IStudent|null = null; 
  editItem:IStudent|null = null;

   stds:IStudent[] = [
    {id:1,name:"Ahmed",age:20},
    {id:2,name:"Mohamed",age:22},
    {id:3,name:"Sara",age:21},
    {id:4,name:"Ali",age:23},
  ];
 
   add(student:IStudent){
    student.id = this.stds.length+1;
    this.stds.push(student);
   
  }

  edit(student:IStudent){
    this.stds.map(std=>{
      if(std.id == student.id){
        std.name = student.name;
        std.age = student.age;
      }
    })
    this.editItem = null;
    this.item = null;
  }






}

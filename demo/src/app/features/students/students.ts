import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, inject, signal } from '@angular/core';
import { IStudent } from '../../models/istudent';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { StudentfilterPipe } from '../../shared/studentfilter-pipe';
import { Test4 } from "../test/test4/test4";
import { Test5 } from "../test/test5/test5";
import { Studentservices } from '../../_services/studentservices';

@Component({
  selector: 'app-students',
  imports: [CommonModule, FormsModule, StudentfilterPipe, Test4, Test5],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students implements OnInit ,OnChanges, OnDestroy{


  // stds = signal<IStudent[]>([
  //   {id:1,name:"Ahmed",age:20},
  //   {id:2,name:"Mohamed",age:22},
  //   {id:3,name:"Sara",age:21},
  //   {id:4,name:"Ali",age:23},
  // ]);
 
  // addStd(name:string,age:any){
  //  // console.log(age);
  //   if(name.trim() == '' || age.trim() == '') return;
  //  let id = this.stds().length+1;
  //   age = Number(age);
  //   this.stds.update(stds=>stds=[...stds,{id,name,age}]);
  // }


  //  stds:IStudent[] = [
  //   {id:1,name:"Ahmed",age:20},
  //   {id:2,name:"Mohamed",age:22},
  //   {id:3,name:"Sara",age:21},
  //   {id:4,name:"Ali",age:23},
  // ];
 
  //  add(student:IStudent){
  //  // console.log(age);
  //   student.id = this.stds.length+1;
  //   this.stds.push(student);
   
  // }

  // dependecy ingection

  stds:IStudent[] = [];
    stdServ  = inject(Studentservices);

  constructor(){
    console.log("constructor executed");
    this.stds = this.stdServ.getAll();
  }



  bdate= new Date();
  test = 10;

  // item:IStudent|null = {id:0,name:"",age:0}; 
  itemID:number = 0; // to show details of student in test5 component

  /*
  Component lifecycle:
  1. Constructor: Used for dependency injection and initializing class members. Avoid complex logic here. first code executed when the component is created.
  2. ngOnChanges: Called whenever an input property changes. Use it to react to changes in input properties. it can be executed multiple times during the component lifecycle, whenever an input property changes.
  3. ngOnInit: Called once after the first ngOnChanges. Use it for component initialization, such as fetching data.
  4. ngOnDestroy: Called just before the component is destroyed. Use it for cleanup, such as unsubscribing from observables or detaching event handlers.
  
  */

  // execute once when the component is created
  // constructor(){

  //   console.log("constructor executed");
  // }

  // execute every time the input property changes
  ngOnChanges(changes: SimpleChanges): void {
    // handle input changes if needed
    // @Input or input()
    console.log("ngOnChanges executed", changes);
  }

 // execute once after the first ngOnChanges
  ngOnInit(): void {

    console.log("ngOnInit executed");

  }

  // execute just before the component is destroyed
  ngOnDestroy(): void {
    // cleanup if needed
    console.log("ngOnDestroy executed");
  }


  /*
  
  Dependency Injection in Angular:

  if i have 4 componenets and need to share data between them to show it or edit it, 
  i can create a service and inject it into the components that need to share data.
  this way i can avoid using @Input() and @Output() decorators and make the code cleaner and more maintainable. 
  
  so solution is to create a service and inject it into the components that need to share data.
  that in dependency container and make it available for injection in the components that need it.

  so component is dependent and service is dependency.

  ng g s _services/studentservices

  steps:
  1- create a service using angular cli
  2- add the service to the providers array in the component that need it or in the app module to make it available for all components.
    providers:[{provide: Studentservices, useClass: Studentservices}]
  3- inject the service into the component using the serv = inject(ServiceClass) function (Recommended) or by adding it to the constructor parameters.
  4- use the service methods to get or set data as needed.


  providers array is used to register the service in the dependency injection system.
  when we add a service to the providers array, we are telling angular that this service is available for injection in the components that need it.
  if we add the service to the providers array in the app module, it will be available for injection in all components.
  if we add the service to the providers array in a specific component, it will be available for injection only in that component and its child components.
  
  
  */



  /*
   Routing in Angular:
    Router services
  
  */


}

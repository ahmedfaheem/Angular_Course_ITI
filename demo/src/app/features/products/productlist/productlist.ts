import { Component } from '@angular/core';
import { IProduct } from '../../../models/iproduct';
import { ICategory } from '../../../models/icategory';
import { CommonModule } from '@angular/common';

// ngFor need commonModule 
@Component({
  selector: 'app-productlist',
  imports: [CommonModule],
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist {

  products:IProduct[] = [
    {id:1, name:'product 1', imgUrl:'https://via.placeholder.com/150', price:100, quantity:10, catId:1},
    {id:2, name:'product 2', imgUrl:'https://via.placeholder.com/150', price:200, quantity:20, catId:2},
    {id:3, name:'product 3', imgUrl:'https://via.placeholder.com/150', price:300, quantity:30, catId:3},
    {id:4, name:'product 4', imgUrl:'https://via.placeholder.com/150', price:400, quantity:40, catId:4},
    {id:5, name:'product 5', imgUrl:'https://via.placeholder.com/150', price:500, quantity:50, catId:5},
  ];

  categories:ICategory[] = [
    {id:1, name:'category 1'},
    {id:2, name:'category 2'},
    {id:3, name:'category 3'},
    {id:4, name:'category 4'},
    {id:5, name:'category 5'},
  ];

}

import { Component, output, signal } from '@angular/core';
import { ICategory } from '../../../models/icategory';
import { FormsModule } from '@angular/forms';
import { input } from '@angular/core';

@Component({
  selector: 'app-prodfilter',
  imports: [FormsModule],
  templateUrl: './prodfilter.html',
  styleUrl: './prodfilter.css',
})
export class Prodfilter {

  total = input<number>(0);
  filterID = "0";

  onFilterChange = output<string>();
   
  filterChanged(){
    this.onFilterChange.emit(this.filterID.toString());
  }

   categories: ICategory[] = [
        {
          id: 1,
          name: "Electronics"
        },
        {
          id: 2,
          name: "Clothing"
        },
        {
          id: 3,
          name: "Stationery"
        }
      ];
      

}

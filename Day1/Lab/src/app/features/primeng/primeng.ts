import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { City } from '../../models/city';
import { EditorModule } from 'primeng/editor';


@Component({
  selector: 'app-primeng',
  imports: [ButtonModule, FormsModule, MessageModule, RatingModule, ToastModule, MultiSelectModule, EditorModule],
  templateUrl: './primeng.html',
  styleUrl: './primeng.css', 
  providers: [MessageService],
  standalone: true,

})



export class Primeng {


    private messageService = inject(MessageService);
    value: any;

    onSubmit(form: any) {
        if (form.valid) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Form Submitted', life: 3000 });
            form.resetForm();
        }
    }


     cities!: City[];
    selectedCities!: any[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }


        text: string | undefined;


}

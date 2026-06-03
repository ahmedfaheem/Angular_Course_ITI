import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Students } from './features/students/Students/students';
import { Contact } from './features/contact/contact';
import { About } from './features/about/about';
import { NotFound } from './features/not-found/not-found';
import { Products } from './features/products/products/products';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'students', component: Students},
    {path: 'products', component: Products},
    {path: 'contact', component: Contact},
    {path: 'about', component: About},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: NotFound},
];

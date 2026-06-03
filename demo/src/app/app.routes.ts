import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Productlist } from './features/products/productlist/productlist';
import { Students } from './features/students/students';
import { Contact } from './features/contact/contact';
import { Notfound } from './features/notfound/notfound';

/*
must aware with order of paths becasue 
1- if we put ** before any path it will catch all paths and the other paths will not work
2- if we put a path with parameter before the path without parameter it will catch all paths and the other paths will not work
so it start from top to bottom


*/


export const routes: Routes = [
    {path:'home', component:Home},
    {path:'students', component:Students},
    {path:'products', component:Productlist},
    {path: 'about', component: About},
    {path:'contact', component: Contact},
     // to redirect to home page when the path is empty /home
     // must use pathMatch:'full' which mean my path start with empty (ahmed.com/) not (ahmed.com/about) 
     // be aware with order of paths because if we put this path before any path it will catch all paths and the other paths will not work
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', component:Notfound}
];

import { Routes } from '@angular/router';
import Main from './views/main/main';

export const routes: Routes = [
    {
        path:'',
        component:Main,
        children:[
            {
                path:'home',
                title:'Home',
                loadComponent: ()=> import('./views/home/home')

            },
            {
                path:'profile',
                title:'Profile',
                loadComponent: ()=> import('./views/profile/profile')

            },
            {
                path:'settings',
                title:'Settings',
                loadComponent: ()=> import('./views/settings/settings')

            },
            {
                path:'**',
                redirectTo:'home'
            },
        ]
    },
    {
        path:'**',
        redirectTo:''
    },
];

export default routes;

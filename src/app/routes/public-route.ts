import { Routes } from '@angular/router';
import { FormvalidationComponent } from '../formvalidation/formvalidation.component';
import { LoginComponent } from '../login/login.component';

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: FormvalidationComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

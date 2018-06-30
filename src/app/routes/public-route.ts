import { Routes } from '@angular/router';
import { FormvalidationComponent } from '../components/formvalidation/formvalidation.component';
import { LoginComponent } from '../components/login/login.component';
import { PublicRouteGaurdService } from '../services/public-route-gaurd.service';

export const PUBLIC_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: FormvalidationComponent,
        canActivate: [PublicRouteGaurdService]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [PublicRouteGaurdService]
    }
];

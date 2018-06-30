import { HomeComponent } from './../components/home/home.component';
import { PostsComponent } from './../components/posts/posts.component';
import { Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { SampleComponent } from '../components/sample/sample.component';
import { CustomerDetailsComponent } from '../components/customer-details/customer-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'posts',
        component: PostsComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'sample',
        component: SampleComponent
    },
    {
        path: 'Customers',
        component: CustomerDetailsComponent,
        canActivate: [AuthGuardService]
    }
];

import { HomeComponent } from './../home/home.component';
import { PostsComponent } from './../posts/posts.component';
import { Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { SampleComponent } from '../sample/sample.component';
import { FormvalidationComponent } from '../formvalidation/formvalidation.component';
import { LoginComponent } from '../login/login.component';

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
    }
];

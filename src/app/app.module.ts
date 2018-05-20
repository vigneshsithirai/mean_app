import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {
  MatInputModule, MatDialogModule, MatButtonModule, MatCardModule, MatDialogConfig, MatRadioModule,
  MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';
import { LoginService } from './services/login.service';

import { HomeComponent } from './home/home.component';
import { AlertComponent } from './alert/alert.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';


// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sample',
    component: SampleComponent
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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    HomeComponent,
    AlertComponent,
    DialogDemoComponent,
    MyDialogComponent,
    FormvalidationComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule,
    MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatRadioModule,
    MatDatepickerModule, MatNativeDateModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    PostsService,
    LoginService,
    MatDialogConfig,
  ], // Add the posts service
  bootstrap: [AppComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule { }

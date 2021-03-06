import { routing } from './main.routing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, CanActivate } from '@angular/router';
import {
  MatInputModule, MatDialogModule, MatButtonModule, MatCardModule, MatDialogConfig, MatRadioModule,
  MatDatepickerModule, MatNativeDateModule, MatSidenavModule,
  MatToolbarModule, MatIconModule, MatIconRegistry
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';

import { PostsService } from './posts.service';
import { LoginService } from './services/login.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { PublicRouteGaurdService } from './services/public-route-gaurd.service';
import { CustomerDetailsService } from './services/customer-details.service';


import { HomeComponent } from './components/home/home.component';
import { PublicComponent } from './components/public/public.component';
import { AlertComponent } from './components/alert/alert.component';
import { DialogDemoComponent } from './components/dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { FormvalidationComponent } from './components/formvalidation/formvalidation.component';
import { SampleComponent } from './components/sample/sample.component';
import { LoginComponent } from './components/login/login.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { ToStringPipe } from './pipes/string.pipe';
import { ImpurePipe } from './pipes/impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    PostsComponent,
    HomeComponent,
    AlertComponent,
    DialogDemoComponent,
    MyDialogComponent,
    FormvalidationComponent,
    SampleComponent,
    SideNavComponent,
    CustomerDetailsComponent,
    ToStringPipe,
    ImpurePipe
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule, MatButtonModule, MatCardModule, MatInputModule, MatRadioModule,
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule,
    MatToolbarModule, MatIconModule,
    // RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [
    PostsService,
    LoginService,
    AuthenticationService,
    AuthGuardService,
    PublicRouteGaurdService,
    CustomerDetailsService,
    MatDialogConfig,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ], // Add the posts service
  bootstrap: [PublicComponent],
  entryComponents: [MyDialogComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry) { }
}

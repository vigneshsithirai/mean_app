import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { PublicComponent } from './public/public.component';
import { AppComponent } from './app.component';
import { routes } from './routes/secure-route';
import { PUBLIC_ROUTES } from './routes/public-route';
import { PublicComponent } from './public/public.component';


const appRoutes: Routes = [
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: AppComponent, data: { title: 'Secure Views' }, children: routes }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

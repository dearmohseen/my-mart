import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './adduser/adduser.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: AddUserComponent
    },
    {
        path: 'landing',
        component: LandingComponent        
    },    
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
    
];

export const routing = RouterModule.forRoot( appRoutes, { useHash: true });

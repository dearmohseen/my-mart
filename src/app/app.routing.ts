import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { AddUserComponent } from './adduser/adduser.component';
=======
>>>>>>> branch 'master' of https://github.com/dearmohseen/angular.git

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
<<<<<<< HEAD
        path: 'signup',
        component: AddUserComponent
    },
    {
        path: 'landing',
        component: LandingComponent        
=======
        path: 'landing',
        component: LandingComponent
>>>>>>> branch 'master' of https://github.com/dearmohseen/angular.git
    },    
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
    
];

export const routing = RouterModule.forRoot( appRoutes, { useHash: true });

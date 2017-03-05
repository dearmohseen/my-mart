import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
    {
        path: 'manageCustomer',
        component: CustomerComponent
    },
    /*    {
            path: 'manageCustomerInfo',
            component: CustomerInfoComponent
        },
        {
            path: 'manageCustomerMedia',
            component: CustomerMediaComponent
        },*/
    {
        path: '',
        redirectTo: '/manageCustomer',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot( appRoutes, { useHash: true });

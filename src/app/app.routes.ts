import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'user', component: UserComponent
    },
];

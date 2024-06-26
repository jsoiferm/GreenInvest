import { Routes } from '@angular/router';
import { InvestComponent } from './invest/invest.component';
import { AppComponent } from './app.component';
import { LearnComponent } from './learn/learn.component';

export const routes: Routes = [
    { path: 'invest', component: InvestComponent },
    { path: 'home', component: AppComponent },
    { path: 'learn', component: LearnComponent }
];

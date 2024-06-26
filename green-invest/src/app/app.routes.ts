import { Routes } from '@angular/router';
import { InvestComponent } from './invest/invest.component';
import { LearnComponent } from './learn/learn.component';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

export const routes: Routes = [
    { path: 'invest', component: InvestComponent },
    { path: '', component: HomeComponent },
    { path: 'learn', component: LearnComponent },
    { path: 'leaderboard', component: LeaderboardComponent }
];

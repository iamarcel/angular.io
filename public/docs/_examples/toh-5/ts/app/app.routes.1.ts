// #docregion
import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    terminal: true
  },
  // #docregion dashboard-route
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // #enddocregion dashboard-route
  // #docregion hero-detail-route
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  // #enddocregion hero-detail-route
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

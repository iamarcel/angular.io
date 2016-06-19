// #docregion
import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';

export const routes: RouterConfig = [
  {
    path: '/heroes',
    component: HeroesComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

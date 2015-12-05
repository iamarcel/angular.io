// #docregion
import {Component}     from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisListComponent}   from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CrisisService}         from './crisis.service';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [CrisisService]
})
// #docregion routes
@RouteConfig([
  {path:'/',         name: 'CrisisCenter', component: CrisisListComponent, useAsDefault: true},
  {path:'/list/:id', name: 'CrisisList',   component: CrisisListComponent},
  {path:'/:id',      name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class CrisisCenterComponent { }
// #enddocregion routes
// #enddocregion
//    <router-outlet name="add"></router-outlet>
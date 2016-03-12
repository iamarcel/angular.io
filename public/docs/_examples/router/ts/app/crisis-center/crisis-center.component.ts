// #docregion
import {Component} from 'angular2/core';
import {CanActivate, RouteConfig, RouterOutlet} from 'angular2/router';

import {CrisisListComponent}     from './crisis-list.component';
import {CrisisDetailComponent}   from './crisis-detail.component';
import {CrisisService}           from './crisis.service';
import {CrisisActivationService} from './crisis-activation.service';

@CanActivate(() => {
  return true;})
@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [CrisisService, CrisisActivationService]
})
@RouteConfig([
  {path:'/',    name: 'CrisisList',   component: CrisisListComponent, useAsDefault: true},
  {path:'/:id', name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class CrisisCenterComponent {
  constructor(_:CrisisActivationService ) {}
}
// #enddocregion

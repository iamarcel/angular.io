// #docregion
import {Component}     from 'angular2/angular2';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ROUTES}        from './routes';
import {CrisisService} from './crisis.service';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [RouterOutlet],
  providers:  [CrisisService]
})
@RouteConfig(ROUTES)
export class CrisisCenterComponent { }
// #enddocregion
//    <router-outlet name="add"></router-outlet>
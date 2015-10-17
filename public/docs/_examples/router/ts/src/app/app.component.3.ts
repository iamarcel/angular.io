/* Third CC version */
// #docregion
import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_NAMES, ROUTES} from './routes';

@Component({
  selector: 'my-app',
// #docregion template
  template: `
    <h1 class="title">Component Router</h1>
    <a [router-link]="[routes.crisisCenter, routes.crisisCenter]">Crisis Center</a>
    <a [router-link]="[routes.heroes]">Heroes</a>
  `,
// #enddocregion template
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(ROUTES)
export class AppComponent {
  routes = ROUTE_NAMES;
}

/* Fourth Chat version */
import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTE_NAMES, ROUTES} from './routes';

// #docregion chat-import
import {ChatComponent}       from './chat/chat.component';
import {CrisisListComponent} from './crisis-list.component';
import {HeroListComponent}   from './heroes/hero-list.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
// #enddocregion chat-import

@Component({
  selector: 'my-app',
// #docregion chat-outlet
  template: `
    <h1>Component Router</h1>
    <a [router-link]="[routes.crisisCenter]">Crisis Center</a>
    <a [router-link]="[routes.heroes]">Heroes</a>
    <a [router-link]="['/', ['chat'] ]">Chat</a>
    <router-outlet></router-outlet>
    <router-outlet name="chat"></router-outlet>
  `,
// #enddocregion chat-outlet
  directives: [ROUTER_DIRECTIVES]
})
// #docregion chat-config
@RouteConfig([ROUTES])
// #enddocregion chat-config
export class AppComponent {
  routes = ROUTE_NAMES;
}

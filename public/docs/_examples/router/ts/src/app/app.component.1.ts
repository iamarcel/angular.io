/* First version */
// #docplaster

// #docregion
import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CrisisListComponent}   from './crisis-list.component';
import {HeroListComponent}     from './hero-list.component';

@Component({
  selector: 'my-app',
// #docregion template
  template: `
    <h1>Component Router</h1>
    <a [router-link]="['CrisisCenter']">Crisis Center</a>
    <a [router-link]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
// #enddocregion template
  directives: [ROUTER_DIRECTIVES]
})
// #docregion route-config
@RouteConfig([
// #docregion route-defs
  {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
  {path:'/heroes',        name: 'Heroes',       component: HeroListComponent}
// #enddocregion route-defs
])
export class AppComponent { }
// #enddocregion route-config
// #enddocregion

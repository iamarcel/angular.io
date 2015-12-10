/* Fourth Chat version */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

// #docregion chat-import
import {ChatComponent}         from './chat/chat.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';
// #enddocregion chat-import

@Component({
  selector: 'my-app',
// #docregion chat-outlet
  template: `
    <h1>Component Router</h1>
    <a [router-link]="['CrisisCenter']">Crisis Center</a>
    <a [router-link]="['Heroes']">Heroes</a>
    <a [router-link]="['/', ['chat'] ]">Chat</a>
    <router-outlet></router-outlet>
    <router-outlet name="chat"></router-outlet>
  `,
// #enddocregion chat-outlet
  directives: [ROUTER_DIRECTIVES]
})
// #docregion chat-config
@RouteConfig([
  {path: '/chat/...',          name: 'Chat',         component: ChatComponent},
  {path: '/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true},
  {path: '/heroes',            name: 'Heroes',       component: HeroListComponent},
  {path: '/hero/:id',          name: 'HeroDetail',   component: HeroDetailComponent}
])
// #enddocregion chat-config
export class AppComponent { }

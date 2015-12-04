// #docplaster

// #docregion
  // #docregion CC
import {RouteDefinition}       from 'angular2/router';

  // #enddocregion CC
import {ChatComponent}         from './chat/chat.component';
  // #docregion CC
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

export const ROUTE_NAMES = {
  // #enddocregion CC
  chat: 'Chat',
  // #docregion CC
  crisisCenter: 'CrisisCenter',
  default: 'Default',
  heroes:   'Heroes',
  heroDetail: 'HeroDetail'
}

export var ROUTES:RouteDefinition[] = [
  // #docregion redirectTo
  {path: '/',                  redirectTo: [ROUTE_NAMES.crisisCenter, ROUTE_NAMES.default]},
  // #enddocregion redirectTo
  // #enddocregion CC
  /* what we think it will be
  // #docregion chat-route
  {aux: '/chat/...',           name: ROUTE_NAMES.chat,         component: ChatComponent},
  // #enddocregion chat-route
  */
  {path: '/chat/...',          name: ROUTE_NAMES.chat,         component: ChatComponent},
  // #docregion CC
  {path: '/crisis-center/...', name: ROUTE_NAMES.crisisCenter, component: CrisisCenterComponent},
  {path: '/heroes',            name: ROUTE_NAMES.heroes,       component: HeroListComponent},
  {path: '/hero/:id',          name: ROUTE_NAMES.heroDetail,   component: HeroDetailComponent}
];
  // #docregion CC
// #docregion

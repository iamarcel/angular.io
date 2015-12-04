// #docregion
import {RouteDefinition}       from 'angular2/router';

//import {ChatComponent}         from './chat/chat.component';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

export const ROUTE_NAMES = {
  chat: 'Chat',
  crisisCenter: 'CrisisCenter',
  heroes:   'Heroes',
  heroDetail: 'HeroDetail'
}

export var ROUTES:RouteDefinition[] = [
  //{path: '/chat/...',          name: 'Chat',         component: ChatComponent},
  {path: '/crisis-center/...', name: 'CrisisCenter', component: CrisisCenterComponent, useAsDefault: true},
  {path: '/heroes',            name: 'Heroes',       component: HeroListComponent},
  {path: '/hero/:id',          name: 'HeroDetail',   component: HeroDetailComponent}
];

insertChatAsyncRoute()

function insertChatAsyncRoute() {
  let aroute = {
    path: '/chat/...',
    name: 'Chat',
    loader: () => LoadComponentAsync('Chat', 'app/chat/chat.component')
  };

  ROUTES.push(aroute);

  function LoadComponentAsync(name:string ,path:string){
    return window['System'].import(path).then((c:any) => c[name]);
  }
}

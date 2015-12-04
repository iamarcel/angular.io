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
  {path: '/',                  redirectTo: [ROUTE_NAMES.crisisCenter, 'Default']},
  //{path: '/chat/...',          name: ROUTE_NAMES.chat,         component: ChatComponent},
  {path: '/crisis-center/...', name: ROUTE_NAMES.crisisCenter, component: CrisisCenterComponent},
  {path: '/heroes',            name: ROUTE_NAMES.heroes,       component: HeroListComponent},
  {path: '/hero/:id',          name: ROUTE_NAMES.heroDetail,   component: HeroDetailComponent}
];

insertChatAsyncRoute()

function insertChatAsyncRoute() {
  let aroute = {
    path: '/chat/...',
    name: ROUTE_NAMES.chat,
    loader: () => LoadComponentAsync('Chat', 'app/chat/chat.component')
  };

  ROUTES.push(aroute);

  function LoadComponentAsync(name:string ,path:string){
    return window['System'].import(path).then((c:any) => c[name]);
  }
}

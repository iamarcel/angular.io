// #docregion
import {bootstrap}        from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {AppComponent}     from './app.component';
import {DialogService}    from './dialog.service';
import {HeroService}      from  './heroes/hero.service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  DialogService,
  HeroService
]);

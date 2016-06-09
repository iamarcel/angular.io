/* First version */
// #docplaster
// #docregion all
// main entry point
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

// Extend Observable throughout the app
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';


/* Can't use AppComponent ... but display as if we can
// #docregion all
bootstrap(AppComponent, [
// #enddocregion all
*/
// Actually use the v.1 component
import { AppComponent as ac } from './app.component.ts'; // './app.component.1';

bootstrap(ac, [
// #docregion all
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));
// #enddocregion all

// #docplaster
// #docregion
import {RouteDefinition}       from 'angular2/router';
import {CrisisListComponent}   from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';

export const ROUTE_NAMES = {
  crisisCenter: 'CrisisCenter',
  crisisList:   'CrisisList',
  crisisDetail: 'CrisisDetail'
}

export const ROUTES:RouteDefinition[] = [
// #enddocregion
  /***********************************************************
   *  IGNORE THESE EXPERIMENTAL ROUTES: Not part of the "real" app **/

  // Redirect a dead route. Note: `redirectTo` takes a PATH, not a ROUTE NAME
  {path:'/oldRoute', name: 'OldRoute', redirectTo: '/'},

  // Can't have two routes w/ same path
  // {path:'/',    name: 'CrisisListing', component: CrisisListComponent},

  // Workaround: give it a bogus path until you can find and rename old named route
  {path:'/xxx', name: 'CrisisListing', redirectTo: '/'},

  /********************************************************/

// #docregion
  // #docregion routes
  {path:'/',         name: ROUTE_NAMES.crisisCenter, component: CrisisListComponent},
  {path:'/list/:id', name: ROUTE_NAMES.crisisList,   component: CrisisListComponent},
  {path:'/:id',      name: ROUTE_NAMES.crisisDetail, component: CrisisDetailComponent}
  // #enddocregion routes
];
// #enddocregion
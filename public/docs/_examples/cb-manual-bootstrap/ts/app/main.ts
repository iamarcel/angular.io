// #docregion
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Component, createPlatform, coreLoadAndBootstrap, ReflectiveInjector} from '@angular/core';
import {BROWSER_PROVIDERS} from '@angular/platform-browser';
import {bootstrap, BROWSER_APP_DYNAMIC_PROVIDERS} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {HeroAppComponent} from './hero-app.component';
import {Hero2AppComponent} from './hero2-app.component';
import {TokenService} from './token.service';
import {APP_TOKEN} from './tokens';

let platform = createPlatform(ReflectiveInjector.resolveAndCreate([
  BROWSER_PROVIDERS,
  HTTP_PROVIDERS,
  TokenService
]));

let appProviders: any[] = [];
let appInjector: ReflectiveInjector;
let tokenService: TokenService = platform.injector.get(TokenService);

bootstrap(Hero2AppComponent, [
  { provide: APP_TOKEN, useValue: '8F34217B-C4F6-48EF-A273-63467DBAD41E' }
]);

tokenService.getAppToken()
  .do((token: any) => {
    appProviders = appProviders.concat([
      { provide: APP_TOKEN, useValue: token }
    ])
  })
  .subscribe(() => {
    appInjector = ReflectiveInjector.resolveAndCreate([
     BROWSER_APP_DYNAMIC_PROVIDERS,
     appProviders
    ], platform.injector);

   coreLoadAndBootstrap(appInjector, AppComponent);
   coreLoadAndBootstrap(appInjector, HeroAppComponent);
  });

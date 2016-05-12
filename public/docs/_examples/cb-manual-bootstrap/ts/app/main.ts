// #docregion
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Component, createPlatform, coreLoadAndBootstrap, ReflectiveInjector, provide} from '@angular/core';
import {BROWSER_PROVIDERS} from '@angular/platform-browser';
import {BROWSER_APP_DYNAMIC_PROVIDERS} from '@angular/platform-browser-dynamic';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {APP_TOKEN} from './tokens';


let appProviders: any[] = [];

let platform = createPlatform(ReflectiveInjector.resolveAndCreate([
  BROWSER_PROVIDERS,
  HTTP_PROVIDERS
]));

let appInjector: ReflectiveInjector;

let http = platform.injector.get(Http);

http.get('./config.json')
    .map((res: any) => res.json().token)
    .do((token: any) => {
      appProviders = appProviders.concat([
        provide(APP_TOKEN, { useValue: token })
      ]);
    })
    .subscribe(() => {
      appInjector = ReflectiveInjector.resolveAndCreate([
       BROWSER_APP_DYNAMIC_PROVIDERS,
       appProviders
      ], platform.injector);

     coreLoadAndBootstrap(appInjector, AppComponent);
    });

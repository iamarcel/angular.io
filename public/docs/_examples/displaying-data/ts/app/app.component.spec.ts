import { iit,it, ddescribe, describe, expect, injectAsync, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';
import { provide, } from 'angular2/core';
import {CORE_DIRECTIVES } from 'angular2/common';

import { AppComponent } from './app.component';

type TCB = TestComponentBuilder;

describe('AppComponent', () => {

  //beforeEachProviders(() => [
  //  CORE_DIRECTIVES
  //]);

  it('should have correct default hero', injectAsync([TestComponentBuilder], (tcb: TCB) => {
    return tcb.createAsync(AppComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      expect(compiled.querySelector('h2')).toHaveText('My favorite hero is: Windstorm');
    });
  }));

  it('should have many heros', injectAsync([TestComponentBuilder], (tcb: TCB) => {
    return tcb.createAsync(AppComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      var ele = compiled.querySelector('ul ~ p');
      expect(ele).toContainText('There are many heroes');
    });
  }));
});

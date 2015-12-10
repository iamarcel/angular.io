import { iit,it, ddescribe, describe, expect, injectAsync, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';
import { provide } from 'angular2/angular2';

import { AppComponent } from '../app/app';

describe('AppComponent', () => {
  beforeEachProviders(() => [

  ]);

  it('should have correct text', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(AppComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      expect(compiled).toContainText('My First Angular 2 App');
      expect(compiled.querySelector('h1')).toHaveText('My First Angular 2 App');
    });
  }));
});

import { iit,it, ddescribe, describe, expect, injectAsync, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';
import { provide } from 'angular2/angular2';

import { ClickMeComponent } from '../app/app';

describe('components', () => {
  beforeEachProviders(() => [

  ]);

  it('clickme component should have correct text', injectAsync([TestComponentBuilder], (tcb) => {
    return tcb.createAsync(ClickMeComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;

      expect(compiled).toContainText('Click me');
      // expect(compiled.querySelector('button')).toHaveText('Click me');
    });
  }));
});

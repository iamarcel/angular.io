import { iit,it, ddescribe, describe, expect, injectAsync, TestComponentBuilder, beforeEachProviders } from 'angular2/testing';
import { provide } from 'angular2/core';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form.component';

type TCB = TestComponentBuilder;

describe('AppComponent', () => {

  //beforeEachProviders(() => [
  //
  //]);

  it('should open with blank form', injectAsync([TestComponentBuilder], (tcb: TCB ) => {

    return tcb.createAsync(AppComponent).then((fixture) => {
      fixture.detectChanges();
      var compiled = fixture.debugElement.nativeElement;
      console.log('foo here');
      var ele = compiled.querySelector('h1');
      expect(ele).toContainText('Hero Form');
    }).catch((e) => {
      expect(1).toEqual(2);
      fail(e);
      throw e;
    })
  }));

  //it('should have button on form', injectAsync([TestComponentBuilder], (tcb: TCB) => {
  //  return tcb.createAsync(AppComponent).then((fixture) => {
  //    fixture.detectChanges();
  //    var compiled = fixture.debugElement.nativeElement;
  //
  //    var ele = compiled.querySelector('form button');
  //    expect(ele).toContainText('Submit');
  //  });
  //}));

  //it('should have button on form and be visible', injectAsync([TestComponentBuilder], (tcb: TCB) => {
  //  return tcb.createAsync(AppComponent).then((fixture) => {
  //    fixture.detectChanges();
  //    var compiled = fixture.debugElement.nativeElement;
  //
  //    var ele = compiled.querySelector('form button:visible');
  //    expect(ele).toContainText('Submit');
  //  });
  //}));
  //
  //it('should hide form on button press', injectAsync([TestComponentBuilder], (tcb: TCB) => {
  //  return tcb.createAsync(AppComponent).then((fixture) => {
  //    fixture.detectChanges();
  //    var compiled = fixture.debugElement.nativeElement;
  //
  //    var ele = compiled.querySelector('form button');
  //    ele.click();
  //    return fixture.debugElement.componentInstance.pending.then(() => {
  //      fixture.detectChanges();
  //      var ele = compiled.querySelector('form button:hidden');
  //      expect(ele).toContainText('Submit');
  //    });
  //  });
  //}));
});

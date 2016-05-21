// #docregion
import { Component } from '@angular/core';

import { HeroRatingComponent } from './rating.component';

@Component({
  selector: 'my-app',
  template: `
    <label>Windstorm: </label>
    <my-hero-rating></my-hero-rating>
  `,
  directives: [HeroRatingComponent]
})
export class AppComponent { }
// #enddocregion

// #docregion
import {Component, Inject} from '@angular/core';
import {APP_TOKEN} from './tokens';

@Component({
  selector: 'hero2-app',
  template: `
    <h3>Hero Application 2</h3>

    <div *ngIf="token">I have received another token: {{ token }}</div>
  `
})
export class Hero2AppComponent {
  constructor(@Inject(APP_TOKEN) public token: string) {}
}

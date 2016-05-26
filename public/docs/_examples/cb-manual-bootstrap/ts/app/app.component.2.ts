// #docregion
import {Component, Inject} from '@angular/core';
import {APP_TOKEN} from './tokens';

@Component({
  selector: 'my-app',
  template: `
    <h2>Main Application</h2>

    <div *ngIf="token">Application token: {{ token }}</div>

    <hr>
  `
})
export class AppComponent {
  constructor(
    @Inject(APP_TOKEN) public token
  ) {}
}

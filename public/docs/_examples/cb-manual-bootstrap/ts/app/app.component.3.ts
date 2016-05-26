// #docregion
import {Component, Inject} from '@angular/core';
import {APP_TOKEN} from './tokens';
import {TokenService} from './token.service';

@Component({
  selector: 'my-app',
  template: `
    <h2>Main Application</h2>

    <div *ngIf="tokenService.acknowledged">Our hero has confirmed his token: {{ token }}</div>

    <hr>
  `
})
export class AppComponent {
  constructor(
    @Inject(APP_TOKEN) public token,
    public tokenService: TokenService
  ) {}
}

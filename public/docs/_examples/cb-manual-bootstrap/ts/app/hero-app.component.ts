// #docregion
import { Component, Inject } from '@angular/core';
import {APP_TOKEN} from './tokens';
import {TokenService} from './token.service';

@Component({
  selector: 'hero-app',
  template: `
    <h3>Hero Application</h3>

    <div *ngIf="token">I have received the token: {{ token }}</div>

    <br>

    <button (click)="acknowledge()">Acknowledge</button>  
  `
})
export class HeroAppComponent {
  constructor(
    @Inject(APP_TOKEN) public token: string,
    private tokenService: TokenService
  ) {}

  acknowledge() {
    this.tokenService.acknowledgeToken();
  }
}

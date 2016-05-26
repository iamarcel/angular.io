import { Component, Inject } from '@angular/core';
import {APP_TOKEN} from './tokens';
import {TokenService} from './token.service';

@Component({
  selector: 'hero-app',
  templateUrl: 'app/hero-app.component.html'
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

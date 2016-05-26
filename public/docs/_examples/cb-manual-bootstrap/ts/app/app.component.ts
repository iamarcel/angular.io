import {Component, Inject} from '@angular/core';
import {APP_TOKEN} from './tokens';
import {TokenService} from './token.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  constructor(
    @Inject(APP_TOKEN) public token,
    public tokenService: TokenService
  ) {}
}

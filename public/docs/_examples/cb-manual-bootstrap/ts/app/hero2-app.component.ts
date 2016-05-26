import { Component, Inject } from '@angular/core';
import {APP_TOKEN} from './tokens';

@Component({
  selector: 'hero2-app',
  templateUrl: 'app/hero2-app.component.html'
})
export class Hero2AppComponent {
  constructor(@Inject(APP_TOKEN) public token: string) {}
}

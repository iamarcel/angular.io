import { Component, Inject } from '@angular/core';
import {APP_TOKEN} from './tokens';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  constructor(@Inject(APP_TOKEN) public token: string) {}
}

import {bootstrap, Component} from 'angular2/angular2';
import {StructuralDirectivesComponent} from './structural-directives.component';
import {AppComponent} from './app.component';

@Component({
  selector: 'my-app',
  template: `
    <button (click)="showApp=!showApp">Show {{next}}</button>
    <my-app *ng-if="showApp"></my-app>
    <structural-directives *ng-if="!showApp"></structural-directives>
  `,
  directives: [AppComponent, StructuralDirectivesComponent]
})
export class boot {
  showApp = false;
  get next() { return this.showApp ? 'Structural Directives' : 'My App'; }
}

bootstrap(boot);

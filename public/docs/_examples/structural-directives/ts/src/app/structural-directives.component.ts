// #docplaster
// #docregion
import {Component, Input, Output} from 'angular2/angular2';
import {UnlessDirective}          from './unless.directive';
import {HeavyLoaderComponent}     from './heavy-loader.component';
import {MyComponent}              from './my-component.component';

@Component({
  selector: 'structural-directives',
  templateUrl: 'app/structural-directives.component.html',
  styles: ['button { min-width: 100px; }'],
  directives: [UnlessDirective, HeavyLoaderComponent, MyComponent]
})
export class StructuralDirectivesComponent {
  heroes = ['Mr. Nice', 'Narco', 'Bombasto'];
  hero = this.heroes[0];
  isInDOM = true;
  isVisible = true;
  logs: string[] = [];
  status = 'ready';
}
//#enddocregion

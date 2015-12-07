// #docplaster
// #docregion
import {Component, Input, Output} from 'angular2/core';
import {UnlessDirective}          from './unless.directive';
import {HeavyLoaderComponent}     from './heavy-loader.component';
import {HeroesComponent}          from './heroes.component';

@Component({
  selector: 'structural-directives',
  templateUrl: 'app/structural-directives.component.html',
  styles: ['button { min-width: 100px; }'],
  directives: [UnlessDirective, HeavyLoaderComponent, HeroesComponent]
})
export class StructuralDirectivesComponent {
  heroes = ['Mr. Nice', 'Narco', 'Bombasto'];
  hero = this.heroes[0];
  condition = true;
  isVisible = true;
  logs: string[] = [];
  status = 'ready';
}
//#enddocregion

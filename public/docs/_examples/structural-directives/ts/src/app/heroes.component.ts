// #docregion
import {Component} from 'angular2/core';
import {IncludeHeroComponentDirective} from './include-hero-component.directive';

/////// Heroes Host Component ///////////
@Component({
  selector: 'my-heroes',
  template: `
  <h3>My Heroes</h3>
  <p><i>Pick a hero</i></p>
  <div *ng-for="#hero of heroes" (click)="selectedHero = hero">
    {{hero}}
  </div>
  <div *ng-if="selectedHero">
    <p><i>You picked ...</i></p>
    <include-hero [hero]="selectedHero"></include-hero>
  </div>
  `,
  directives: [IncludeHeroComponentDirective]
})
export class HeroesComponent {
   heroes = ['Windstorm', 'Abacus', 'Magneta', 'Uno'];
   selectedHero:string;
}
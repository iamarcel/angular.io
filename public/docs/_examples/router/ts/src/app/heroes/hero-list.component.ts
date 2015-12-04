// TODO: Feature Componetized like HeroCenter
// #docregion
import {Component, OnInit}   from 'angular2/angular2';
import {Hero, HeroService}   from './hero.service';
import {Router}              from 'angular2/router';

@Component({
  // #docregion template
  template: `
    <h2>HEROES</h2>
    <ul>
      <li *ng-for="#hero of heroes"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `
  // #enddocregion template
})
export class HeroListComponent implements OnInit {
  public heroes: Hero[];
  public selectedHero: Hero;

  // #docregion ctor
  constructor(
    private _router: Router,
    private _service: HeroService) { }
  // #enddocregion ctor
  ngOnInit() {
    this._service.getHeroes().then(heroes => this.heroes = heroes)
  }
  // #docregion select
  onSelect(hero: Hero) {
    this._router.navigate(
      ['HeroDetail', { id: hero.id }]
    );
  }
  // #enddocregion select
}

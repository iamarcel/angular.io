import {Component} from 'angular2/angular2';
import {InvitedHero} from './invited-hero';

import {Hero} from '../hero';

@Component({
  selector: 'hero-job-board',
  // #docregion invite-template
  template: `
        <div class='request-panel'>
            <h2>Hero Job Board</h2>
            <div>
                <button (click)='inviteHeroes()'>Invite heroes</button>
            </div>
            <h3>Job Request</h3>
            <label>Request:</label>
            <input style='width: 400px;'/>
            <button>Ask</button>
            <h3>Responding Heroes</h3>
            <div class='responding-hero'
                *ng-for='#hero of respondingHeroes'>
                <span class='hero-name'>[hero.name]</span>
                <button>Assign</button>
            </div>
        </div>
        <div class='invited-hero-list'>
            <invited-hero *ng-for='#hero of invitedHeroes'
                [hero]='hero'>
            </invited-hero>
        </div>
    `,
  // #enddocregion invite-template
  styleUrls: ['app/hero-job-board.css'],
  directives: [InvitedHero]
})
export class HeroJobBoard {
  heroes = Hero.heroes;

  respondingHeroes: Hero[] = [
    this.heroes[1],
    this.heroes[3],
    this.heroes[5]
  ];
  // #docregion invite-heroes
  invitedHeroes: Hero[] = [];

  inviteHeroes() {
    this.invitedHeroes = this.heroes;
    this.respondingHeroes = [];
  }
  // #enddocregion invite-heroes
}
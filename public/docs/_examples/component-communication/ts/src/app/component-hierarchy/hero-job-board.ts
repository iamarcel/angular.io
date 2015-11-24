// #docregion imports
import {Component} from 'angular2/angular2';
import {InvitedHero} from './invited-hero';
import {Hero} from '../hero';
// #enddocregion imports

// #docregion annotations
@Component({
  selector: 'hero-job-board',
  template: `
  <div class='request-panel'>
    <h2>Hero Job Board</h2>
    <button>Invite heroes</button>

    <h3>Job Request</h3>
    <label>Request:</label>
    <input placeholder="Enter a job request">
    <button>Ask</button>

    <h3>Responding Heroes</h3>
    <div class='responding-hero'
      *ng-for='#hero of respondingHeroes'>
      <span class='hero-name'>[hero.name]</span>
      <button>Assign</button>
    </div>
  </div>

  <div class='invited-hero-list'>
    <invited-hero *ng-for='#hero of invitedHeroes'>
      [hero.name]
    </invited-hero>
  </div>
    `,
  styleUrls: ['app/hero-job-board.css'],
  directives: [InvitedHero]
})
// #enddocregion annotations
// #docregion component
export class HeroJobBoard{
  invitedHeroes = Hero.heroes.slice(0,6);

  respondingHeroes: Hero[] = [
    this.invitedHeroes[1],
    this.invitedHeroes[3],
    this.invitedHeroes[5]
  ];

}
// #enddocregion component
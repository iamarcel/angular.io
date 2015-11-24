import {Component} from 'angular2/angular2';
import {InvitedHero} from './invited-hero';

import {Hero} from '../hero';

@Component({
  selector: 'hero-job-board',
  template: `
        <div class='request-panel'>
            <h2>Hero Job Board</h2>
            <div>
                <button (click)='inviteHeroes()'>Invite heroes</button>
            </div>
            <h3>Job Request</h3>
            <label>Request:</label>
            <input #box (keyup)="0" style='width: 400px;' [value]='jobRequest' />
            <button (click)='announceJob(box.value)'
                [disabled]='!box?.value.trim().length > 0'>
                Ask
            </button>
            <h3>{{getJobStatus()}}</h3>
            <div class='responding-hero'
                *ng-for='#hero of respondingHeroes'>
                <span class='hero-name'>{{hero.name}}</span>
                <button>Assign</button>
            </div>
        </div>
        <div class='invited-hero-list'>
            <invited-hero *ng-for='#hero of invitedHeroes'
                [hero]='hero' [request]='jobRequest'
                (on-hero-response)='heroTakesJob($event)'>
            </invited-hero>
        </div>
    `,
  styleUrls: ['app/hero-job-board.css'],
  directives: [InvitedHero]
})
export class HeroJobBoard {
  heroes = Hero.heroes;
  respondingHeroes: Hero[] = [];
  invitedHeroes: Hero[] = [];
  jobRequest: string = '';

  inviteHeroes() {
    this.invitedHeroes = this.heroes;
    this.respondingHeroes = [];
    this.jobRequest = null;
  }

  getJobStatus() {
    if (!this.jobRequest) {
      return "No job request announced"
    }
    else {
      return this.respondingHeroes.length > 0
        ? "Responding heroes"
        : "No responding heroes";
    }
  }

  announceJob(request: string) {
    this.jobRequest = request.trim();
  }
  // #docregion hero-takes-job
  heroTakesJob(hero: Hero) {
    this.respondingHeroes.push(hero);
  }
  // #enddocregion hero-takes-job
}
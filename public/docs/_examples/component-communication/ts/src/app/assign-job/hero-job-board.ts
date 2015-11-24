import {Component} from 'angular2/angular2';
import {InvitedHero} from './invited-hero';
import {JobService} from './job-service';

import {Hero} from '../hero';

@Component({
  selector: 'hero-job-board',
  template: `
  <div class="request-panel">
    <h2>Hero Job Board</h2>
    <button (click)="inviteHeroes()">Invite heroes</button>

    <h3>Job Request</h3>
    <label>Request:</label>
    <input [(ng-model)]="newRequest" (keyup.enter)="announceJob()"
           placeholder="Enter a job request">
    <button (click)="announceJob()">Ask</button>

    <h3>{{jobStatus}}</h3>
    <div *ng-if="!winner">
      <div *ng-for="#hero of respondingHeroes" class="responding-hero">
        <span class="hero-name">{{hero.name}}</span>
        <button (click)="assignJob(hero)">Assign</button>
      </div>
    </div>

    <div *ng-if="winner">
      The winner is
      <span class="winner">{{winner.name}}</span>
    </div>
  </div>

  <div class="invited-hero-list">
    <invited-hero *ng-for="#hero of invitedHeroes" [hero]="hero">
    </invited-hero>
  </div>
  `,
  styleUrls: ['app/hero-job-board.css'],
  directives: [InvitedHero],
  providers: [JobService]
})
export class HeroJobBoard {
  constructor(private jobService: JobService) {
    jobService.post(null);
  }

  heroes = Hero.heroes;
  invitedHeroes: Hero[] = [];
  newRequest = '';

  get jobRequest() {
    return this.jobService.jobRequest;
  }

  get respondingHeroes() {
    return this.jobService.respondingHeroes;
  }

  get winner() {
    return this.jobService.assignedTo;
  }

  inviteHeroes() {
    this.invitedHeroes = this.heroes;
    this.jobService.post(null);
    this.jobRequest = null;
  }

  get jobStatus() {
    if (!this.jobRequest) { return "No job request announced" }
    if (this.winner) { return "Job assigned"; }
    return this.jobService.respondingHeroes.length
      ? "Responding heroes"
      : "No responding heroes";
  }

  announceJob() {
    let request = this.newRequest.trim();
    if (request) {
      this.jobService.post(request);
      this.newRequest = '';
    }
  }

  assignJob(hero: Hero) {
    this.jobService.assign(hero);
  }
}
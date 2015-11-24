import {Component} from 'angular2/angular2';
import {InvitedHero} from './invited-hero';
import {JobService} from './job-service';
import {MessageBus} from './message-bus';

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
      <div *ng-if='!winner'>
          <div class='responding-hero'
              *ng-for='#hero of respondingHeroes'>
              <span class='hero-name'>{{hero.name}}</span>
              <button (click)='assignJob(hero)'>Assign</button>
          </div>
      </div>
      <div *ng-if='winner'>
          The winner is
          <span class='winner'>{{winner.name}}
      </div>
  </div>
  <div class='invited-hero-list'>
      <invited-hero *ng-for='#hero of invitedHeroes'
          [hero]='hero'>
      </invited-hero>
  </div>
    `,
  styleUrls: ['app/hero-job-board.css'],
  directives: [InvitedHero],
  providers: [JobService]
})
export class HeroJobBoard {
  constructor(private jobService: JobService,
    private messageBus: MessageBus) {
    jobService.post(null);
  }

  heroes = Hero.heroes;
  invitedHeroes: Hero[] = [];

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
    this.messageBus.broadcastMessage('Heroes invited.');
  }

  getJobStatus() {
    if (!this.jobRequest) {
      return "No job request announced"
    }
    else if (this.winner) {
      return "Job assigned";
    } else {
      return this.jobService.respondingHeroes.length > 0
        ? "Responding heroes"
        : "No responding heroes";
    }
  }

  announceJob(request: string) {
    this.jobService.post(request.trim());
    this.messageBus.broadcastMessage('Job announced: ' + request.trim());
  }

  assignJob(hero: Hero) {
    this.jobService.assign(hero);
    this.messageBus.broadcastMessage('Job "' + this.jobRequest
      + '" assigned to ' + hero.name);
  }
}
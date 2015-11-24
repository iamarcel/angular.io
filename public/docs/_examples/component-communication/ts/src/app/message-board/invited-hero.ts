import {Component, Input, Output, EventEmitter} from 'angular2/angular2';
import {Hero} from '../hero';
import {HeroJobBoard} from './hero-job-board';
import {JobService} from './job-service';
import {MessageBus} from './message-bus';

@Component({
    selector: 'invited-hero',
    template: `
        <div class='invited-hero'>
            <h3 class='hero-name'>Job Request for {{hero.name}}</h4>
            <h4 class=job-request
                [class.announced]='request'
                [class.undertaken]='undertaken'>
                {{getRequest()}}
            </h4>
            <h2 *ng-if='winner'
                [class.won]='undertaken && winner==hero'
                [class.lost]='undertaken && winner!=hero'
                [class.else]='!undertaken'>
                {{finalState}}
            </h2>
            <button [disabled]="!request || undertaken"
                [hidden]='winner'
                (click)='takeJob()'>
                I'll take it!
            </button>
            <button [hidden]="!winner || winner == hero"
                (click)='stealJob()'>
                I steal the job!
            </button>
        </div>
    `,
    styleUrls: ['app/invited-hero.css']
})
export class InvitedHero {
    @Input() hero: Hero;
    request: string;
    undertaken: boolean;
    winner: Hero;

    constructor(private jobService: JobService,
        private messageBus: MessageBus) {
        jobService.jobPostEvent.subscribe(
            (request:string) => {
                this.request = request;
                this.undertaken = false;
                this.winner = null;
            });
        jobService.jobAssignedEvent.subscribe(
            (winner:Hero) => {
                this.winner = winner;
            });
    }

    getRequest() {
        return this.request
          ? this.request : "No job announced";
    }

    takeJob() {
        this.jobService.take(this.hero);
        this.undertaken = true;
        this.messageBus.broadcastMessage('*** I, ' + this.hero.name
            + ', proudly undertake the job!')
    }

    get finalState() {
        if (!this.winner) return "No winner announced yet."
        if (!this.undertaken) return "Job taken."
        return this.winner == this.hero
            ? "I won the job !!!"
            : "I lost the job :-(";
    }

    stealJob() {
        this.undertaken = true;
        this.jobService.assign(this.hero);
        this.messageBus.broadcastMessage('*** I, ' + this.hero.name
            + ', stole the job... Hahaha...');
    }
}
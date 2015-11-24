import {Component, Input} from 'angular2/angular2';
import {Hero} from '../hero';
import {HeroJobBoard} from './hero-job-board';
import {JobService} from './job-service';

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
            <button [disabled]="!request || undertaken"
                (click)='takeJob()'>
                I'll take it!
            </button>
        </div>
    `,
    styleUrls: ['app/invited-hero.css']
})
// #docregion component
export class InvitedHero {
    @Input() hero: Hero;
    request: string;
    undertaken: boolean;

    constructor(private jobService: JobService) {
        jobService.jobPostEvent.subscribe(
            (request:string) => {
                this.request = request;
                this.undertaken = false;
            });
    }

    getRequest() {
        return this.request
          ? this.request : "No job announced";
    }

    takeJob() {
        this.jobService.take(this.hero);
        this.undertaken = true;
    }
}
// #enddocregion component
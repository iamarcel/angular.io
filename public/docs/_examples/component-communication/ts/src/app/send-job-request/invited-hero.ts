import {Component, Input} from 'angular2/angular2';
import {Hero} from '../hero';

@Component({
    selector: 'invited-hero',
// #docregion template
    template: `
        <div class='invited-hero'>
            <h3 class='hero-name'>Job Request for {{hero.name}}</h4>
            <h4 class=job-request
                [class.announced]='request'>
                {{getRequest()}}
            </h4>
            <button [disabled]="!request">
            I'll take it!
            </button>
        </div>
    `,
// #enddocregion template
// #docregion styles
// HEY DOC'ER See invited-hero.css v1 region
  styleUrls: ['app/invited-hero.css']
})
// #enddocregion styles
// #docregion component
export class InvitedHero {
    @Input() hero : Hero;
    @Input() request: string;

    getRequest() {
        return this.request
          ? this.request : "No job announced";
    }
}
// #enddocregion
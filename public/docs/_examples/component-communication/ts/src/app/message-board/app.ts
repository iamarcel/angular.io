// WB: I'D LIKE TO GET RID OF THIS IF WE CAN
// #docplaster

// #docregion
// #docregion v1
import {Component} from 'angular2/angular2';
import {HeroJobBoard} from './hero-job-board';
import {MessageBoard} from './message-board';
// #enddocregion v1
import {MessageBus} from './message-bus'

// #docregion
// #docregion v1
@Component({
  selector: 'hero-job-app',
  template: `
    <message-board></message-board>
    <hero-job-board></hero-job-board>
  `,
  styleUrls: ['app/hero-job-board.css'],
  directives: [HeroJobBoard, MessageBoard],
// #enddocregion v1
  providers: [MessageBus]
// #docregion v1
})
export class HeroJobApp { }
// #enddocregion v1
// #enddocregion
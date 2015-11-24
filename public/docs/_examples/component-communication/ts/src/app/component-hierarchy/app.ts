// WB: I THINK WE SHOULD REMOVE THIS FILE
// #docregion
import {Component} from 'angular2/angular2';
import {HeroJobBoard} from './hero-job-board';

@Component({
  selector: 'hero-job-app',
  template:'<hero-job-board></hero-job-board>',
  styleUrls: ['app/hero-job-board.css'],
  directives: [HeroJobBoard]
})
export class HeroJobApp { }

// #enddocregion
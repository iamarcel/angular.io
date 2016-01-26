// #docregion
import {Component} from 'angular2/core';
import {HeroAsyncMessageComponent} from './hero-async-message.component';
import {HeroBirthday} from './hero-birthday2.component';
import {HeroListComponent} from './hero-list.component';
import {MovieFilterPipe} from './movie-filter.pipe';
import {PowerBooster} from './power-booster.component';
import {PowerBoostCalculator} from './power-boost-calculator.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives:[
    HeroAsyncMessageComponent,
    HeroBirthday,
    HeroListComponent,
    PowerBooster, PowerBoostCalculator
  ],
  pipes:[MovieFilterPipe]
})
export class AppComponent {
  birthday = new Date(1988,3,15); // April 15, 1988
  movies= [{title: 'Fast Break'}, {title: 'Fast Times'}, {title: 'Good Times'}];
}

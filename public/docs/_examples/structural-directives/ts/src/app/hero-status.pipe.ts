// #docregion
import {Pipe} from 'angular2/angular2';
import {Hero} from './hero';

@Pipe({ name: 'heroStatusPipe' })
export class HeroStatusPipe {
  transform(heroes: Hero[], args: string[]): Hero[] {
    return heroes.filter((hero) => hero.status === args[0]);
  }
}

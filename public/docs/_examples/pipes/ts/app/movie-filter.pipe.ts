import {Pipe, PipeTransform} from 'angular2/core';

interface Movie {title:string}

@Pipe({ name: 'movieFilter' })
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], args: string[]): any {
    let filter = args[0] && new RegExp(args[0].toLocaleLowerCase(),'i');
    return filter ? movies.filter(movie => filter.test(movie.title)) : movies;
  }
}

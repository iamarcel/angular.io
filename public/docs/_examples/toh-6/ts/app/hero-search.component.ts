// #docregion
import { Component, OnInit } from '@angular/core';
import { Control }           from '@angular/common';
import { Router }            from '@angular/router-deprecated';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-search',
  templateUrl: 'app/hero-search.component.html',
  providers: [HeroSearchService]    
})
export class HeroSearchComponent implements OnInit {
  search = new Control('');   
  heroes: Hero[] = [];
  showResult = true;
  
  constructor(private _heroSearchService:HeroSearchService, private _router:Router) {}
  
  gotoDetail(hero: Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
  
  // #docregion search
  ngOnInit() {
    this.search.valueChanges
               .debounceTime(300)
               .distinctUntilChanged()
               .do(value => this.showResult = value.length > 0)
               .filter(value => value.length > 0)  
               .switchMap(term => this._heroSearchService.search(term))
               .subscribe(result => this.heroes = result, error => console.log(error));  
  }
  // #enddocregion search
}
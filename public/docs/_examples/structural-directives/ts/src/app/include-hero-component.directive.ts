// #docregion
import {Directive, Input,
        DynamicComponentLoader, ElementRef} from 'angular2/core';

import {heroComponentSelector} from './hero-component-selector';

/**
 * Dynamically load a hero-displaying component
 * when the hero changes
 * based on the result of the `heroComponentSelector`
 */
@Directive({
  selector: 'include-hero'
})
export class IncludeHeroComponentDirective {
   @Input() hero:string;
   private _priorComponent:any;

  constructor(
    private dcl: DynamicComponentLoader,
    private elementRef: ElementRef) { }

  ngOnChanges() {
    this._priorComponent && this._priorComponent.dispose();

    let cmpType = heroComponentSelector(this.hero);

    this.dcl.loadNextToLocation(cmpType, this.elementRef)
    .then((cmp:ComponentRef) => {
      cmp.instance['hero'] = this.hero;
      this._priorComponent = cmp;
    })
  }
}
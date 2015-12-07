// #docregion
import {Component} from 'angular2/core';

/**
 * A function that determines the correct component to
 * display the hero based on some hero characteristic.
 *
 * This one decides based on first initial.
 */
export function heroComponentSelector(hero:string) {
  let l = hero[0].toLowerCase();
  if (l < 'm') {return AlHeroComponent;}
  else if (l < 'u'){return MtHeroComponent;}
  return UzHeroComponent;
}

/////// Various Hero-displaying Components ////////////
@Component({
  template: '<div class="al">{{hero}}, a hero in the range [a-l]</div>',
  styles: ['.al {background: yellow}']
})
export class AlHeroComponent { hero:string; }

@Component({
  template: '<div class="mt">{{hero}}, a hero in the range [m-t]</div>',
  styles: ['.mt {background: lightgreen}']
})
export class MtHeroComponent { hero:string; }

@Component({
  template: '<div class="uz">{{hero}}, a hero in the range [u-z]</div>',
  styles: ['.uz {background: cyan}']
})
export class UzHeroComponent {
  hero:string;
  // show that it is unloaded and destroyed properly
  ngOnDestroy(){console.log('UzHero destroyed')}
}

// #docregion
import {Component, Input, Output, AfterViewInit, ViewChild, ElementRef, EventEmitter} from '@angular/core';

// #docregion declare-jquery
declare var jQuery:any;
// #enddocregion declare-jquery
@Component({
  selector: 'cb-hero',
  templateUrl: 'app/hero.component.html'            
})
export class HeroComponent implements AfterViewInit {
  @Input() name:string;
  @Output() remove:EventEmitter<string> = new EventEmitter<string>();    
  @ViewChild('hero') hero: ElementRef;
  
  // #docregion add-plugin
  ngAfterViewInit() {
    jQuery(this.hero.nativeElement).draggable({revert: "invalid"});      
  }
  // #enddocregion add-plugin
  
  done() {
    this.remove.emit(this.name);
  }
}

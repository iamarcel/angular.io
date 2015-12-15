(function() {

// #docregion click-me-component
var ClickMeComponent = ng.core
.Component({
  selector: 'click-me',
  template: '<button (click)="onClickMe()">Click me</button>'
})
.Class({
  constructor: function() {
    this.onClickMe = function() {
      alert('You are my hero!');
    }
  }
});
// #enddocregion click-me-component

// #docregion key-up-component
var KeyUpComponent = ng.core
.Component({
  selector: 'key-up',
  template: 
    '<h4>Give me some keys!</h4>' +
    '<div><input (keyup)="onKey($event)"></div>' +
    '<div>{{values}}</div>'
})
.Class({
  constructor: function() {
    this.values = '';
    this.onKey = function(event) {
      this.values += event.target.value + ' | ';  
    }
  }
});
// #enddocregion key-up-component

// #docregion loop-back-component
var LoopbackComponent = ng.core
.Component({
  selector: 'loop-back',
  template: 
    '<h4>keyup loop-back component</h4>' +
    '<input #box (keyup)="0"> <p>{{box.value}}</p>'
}) 
.Class({
  constructor: function() {}
});
// #enddocregion loop-back-component

// #docregion key-up2-component
var KeyUpComponentV2 = ng.core
.Component({
  selector: 'key-up2',
  template: 
    '<h4>Give me some more keys!</h4>' +
    '<div><input #box (keyup)="onKey(box.value)"></div>' +
    '<div>{{values}}</div>'
})
.Class({
  constructor: function() {
    this.values = '';
    this.onKey = function(value) {
      this.values += value + ' | ';  
    }
  }
});
// #enddocregion key-up2-component

// #docregion key-up3-component
var KeyUpComponentV3 = ng.core
.Component({
  selector: 'key-up3',
  template: 
    '<h4>Type away! Press [enter] when done.</h4>' +
    '<div><input #box (keyup.enter)="values=box.value"></div>' +
    '<div>{{values}}</div>'
})
.Class({
  constructor: function() {
    this.values = '';
  }
});
// #enddocregion key-up3-component

// #docregion key-up4-component
var KeyUpComponentV4 = ng.core
.Component({
  selector: 'key-up4',
  template: 
    '<h4>Type away! Press [enter] or mouse away when done.</h4>' +
    '<div>' +
    '  <input #box' + 
    '    (keyup.enter)="values=box.value"' + 
    '    (blur)="values=box.value">' +
    '<div>' +
    '<div>{{values}}</div>'
})
.Class({
  constructor: function() {
    this.values = '';
  }
});
// #enddocregion key-up4-component

// #docregion little-tour-of-heroes-app
var LittleTour = ng.core
.Component({
  selector: 'little-tour',
  template: 
    '<h4>Little Tour of Heroes</h4>' +
    '<input #newHero' + 
    '  (keyup.enter)="addHero(newHero)"' +
    '  (blur)="addHero(newHero)">' +
    '<button (click)=addHero(newHero)>Add</button>' +
    '<ul><li *ngFor="#hero of heroes">{{hero}}</li></ul>'
})
.Class({
  constructor: function() {
    this.heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.addHero = function(newHero) {
      if (newHero.value) { 
        this.heroes.push(newHero.value); 
        newHero.value = null; // clear the newHero textbox
      }
    }
  }
});
// #enddocregion little-tour-of-heroes-app

var AppComponent = ng.core
.Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [
    ClickMeComponent,
    KeyUpComponent,
    LoopbackComponent,
    KeyUpComponentV2,
    KeyUpComponentV3,
    KeyUpComponentV4, 
    LittleTour
  ]
})
.Class({
  constructor: function() { }
});

document.addEventListener('DOMContentLoaded', function() {
  ng.platform.browser.bootstrap(AppComponent);
});

})()
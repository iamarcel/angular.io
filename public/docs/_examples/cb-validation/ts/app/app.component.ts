// #docplaster
// #docregion
import { Component } from '@angular/core';
import { HeroFormTemplateComponent } from './hero-form-template.component'
import { HeroFormModelBindingComponent } from './hero-form-model-binding.component'
import { HeroFormModelComponent } from './hero-form-model.component'

@Component({
  selector: 'my-app',
  template: `<hero-form-template></hero-form-template>
             <hr>
             <hero-form-model-binding></hero-form-model-binding>
             <hr>
             <hero-form-model></hero-form-model>`,
  directives: [HeroFormTemplateComponent,
              HeroFormModelBindingComponent,
              HeroFormModelComponent]
})
export class AppComponent { }
// #enddocregion
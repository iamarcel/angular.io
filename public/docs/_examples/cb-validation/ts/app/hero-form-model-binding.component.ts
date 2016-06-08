// #docplaster
// #docregion
import { Component } from '@angular/core';
import { ControlGroup, Control, FormBuilder, Validators }    from '@angular/common';

import { Hero }    from './hero';

@Component({
  selector: 'hero-form-model-binding',
  templateUrl: 'app/hero-form-model-binding.component.html'
})
// #docregion class
export class HeroFormModelBindingComponent {
  heroForm: ControlGroup;
  nameControl: Control;
  powerControl: Control;

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 
                   'Chuck Overstreet');
                   
// #enddocregion class
  submitted = false;

// #docregion class
  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.nameControl = new Control("", 
        Validators.compose([Validators.required,
                            Validators.minLength(4),
                            Validators.maxLength(24)])
    );
    this.powerControl = new Control("", Validators.required);
                                                    
    this.heroForm = this.fb.group({
          'name': this.nameControl,
          'alterEgo': [""],
          'power': this.powerControl
    });
  }
  // #enddocregion class

  onSubmit() { this.submitted = true; }

  isRequired(controlName: string): boolean {
    if (controlName==='name' || controlName==='power') return true
      return false;
  }

  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  active = true;

  newHero() {
    this.model = new Hero(42, '', '');
    this.buildForm();
    this.active = false;
    setTimeout(()=> this.active=true, 0);
    console.log(this.heroForm);
  }
// #docregion class
}
// #enddocregion class
// #enddocregion

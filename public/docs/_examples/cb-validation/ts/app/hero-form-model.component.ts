// #docplaster
// #docregion
import { Component } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';

import { Hero }    from './hero';

@Component({
  selector: 'hero-form-model',
  templateUrl: 'app/hero-form-model.component.html'
})
// #docregion class
export class HeroFormModelComponent {
  heroForm: ControlGroup;
  formError: { [id: string]: string };
  private _validationMessages: { [id: string]: { [id: string]: string } };
    
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 
                    'Chuck Overstreet');
// #enddocregion class
  submitted = false;
// #docregion class
  constructor(private fb: FormBuilder) {
    this.formError = {
      'name': '',
      'alterEgo': '',
      'power': ''
    };
    this._validationMessages = {
      'name': {
        'required': 'Name is required.',
        'minlength': 'Name must be at least 4 characters long.',
        'maxlength': 'Name cannot be more than 24 characters long.'
      },
      'power': {
        'required': 'Power is required.'
      }
    };
       
    this.buildForm();
  }

  buildForm() {
    this.heroForm = this.fb.group({
      'name': [this.model.name, 
               Validators.compose([Validators.required,
                          Validators.minLength(4),
                          Validators.maxLength(24)])],
      'alterEgo': [this.model.alterEgo],
      'power': [this.model.power, Validators.required]
    });
    
    this.heroForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data: any) {
      for (let field in this.formError) {
          if (this.formError.hasOwnProperty(field)) {
              let hasError = (this.heroForm.controls[field].dirty) &&
                              !this.heroForm.controls[field].valid;
              this.formError[field] = '';
              if (hasError) {
                  for (let key in this.heroForm.controls[field].errors) {
                      if (this.heroForm.controls[field].errors.hasOwnProperty(key)) {
                          this.formError[field] += this._validationMessages[field][key] + ' ';
                      }
                  }
              }
          }
      }
  }
// #enddocregion class
  onSubmit() {
    this.submitted = true;
    this.model = this.heroForm.value;
  }
  
  isRequired(controlName: string): boolean {
      if (Object.keys(this._validationMessages).includes(controlName)) {
        return Object.keys(this._validationMessages[controlName]).includes('required');}
      return false;
  }
  // Reset the form with a new hero AND restore 'pristine' class state
  // by toggling 'active' flag which causes the form
  // to be removed/re-added in a tick via NgIf
  // TODO: Workaround until NgForm has a reset method (#6822)
  // #docregion new-hero
  active = true;

  newHero() {
    this.model = new Hero(42, '', '');
    this.buildForm();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
  // #docregion class
}
// #enddocregion class
// #enddocregion

import {Component} from "@angular/core";
import {A11yHelperService} from "../services/a11y-helper.service";
import {A11yCustomControlComponent} from "../shared/a11y-custom-control.component";
import {A11yValueHelperComponent} from "../shared/a11y-value-helper.component";
import {A11yCustomButtonComponent} from "../shared/a11y-custom-button.component";

@Component({
  selector: 'a11y-component-roles',
  templateUrl: './app/component-roles/a11y-component-roles.component.html',
  directives: [
    A11yCustomControlComponent,
    A11yValueHelperComponent,
    A11yCustomButtonComponent
  ]
})
export class A11yComponentRolesComponent {

  inputDivModel: string = '';
  buttonClicks: number = 0;

  constructor(private _a11yHelper: A11yHelperService){}

  onClick():void {
    this.buttonClicks++;
  }

  generateSkiplink(hash:string){
    return this._a11yHelper.getInternalLink(hash, 'ComponentRoles');
  }

  generateButtonString(): string{
    return `Button has been clicked ${this.buttonClicks} times`;
  }

}

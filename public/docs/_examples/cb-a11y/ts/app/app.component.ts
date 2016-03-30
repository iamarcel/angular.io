import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouteConfig, ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {A11yFormControlsComponent} from "./form-controls/a11y-form-controls.component";
import {A11yIndexComponent} from "./a11y-index.component";
import {A11yHelperService} from "./services/a11y-helper.service";
import {A11yManagingFocusComponent} from "./managing-focus/a11y-managing-focus.component";
import {A11yComponentRolesComponent} from "./component-roles/a11y-component-roles.component";
import {A11yDevToolsComponent} from "./dev-tools/a11y-dev-tools.component";
import {Router} from "@angular/router-deprecated";

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives:[
    ROUTER_DIRECTIVES
  ],
  providers: [
    ROUTER_PROVIDERS,
    A11yHelperService
  ]
})
@RouteConfig([
  {path:'/', name: 'Index', component: A11yIndexComponent},
  {path:'/form-controls', name: 'FormControls', component: A11yFormControlsComponent},
  {path:'/managing-focus', name: 'ManagingFocus', component: A11yManagingFocusComponent},
  {path:'/component-roles', name: 'ComponentRoles', component: A11yComponentRolesComponent},
  {path:'/dev-tools/...', name: 'DevTools', component: A11yDevToolsComponent}
])
export class AppComponent {

  constructor(private _router: Router){
  }

  isIndex():boolean {
    let instruction = this._router.generate(['Index']);
    return this._router.isRouteActive(instruction);
  }

}

import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {A11yFailsComponent} from "./a11y-fails/a11y-fails.component";
import {A11yPassComponent} from "./a11y-pass/a11y-pass.component";
import {A11yDevToolsIndexComponent} from "./a11y-dev-tools-index.component";

@Component({
  selector: 'a11y-dev-tools',
  templateUrl: './app/dev-tools/a11y-dev-tools.component.html',
  directives: [ROUTER_DIRECTIVES]

})
@RouteConfig([
  {path: '/', name: 'A11yDevToolsIndex', component: A11yDevToolsIndexComponent, useAsDefault: true},
  {path: '/fail-demo', name: 'A11yFails', component: A11yFailsComponent},
  {path: '/pass-demo', name: 'A11yPass', component: A11yPassComponent}
])
export class A11yDevToolsComponent{

}

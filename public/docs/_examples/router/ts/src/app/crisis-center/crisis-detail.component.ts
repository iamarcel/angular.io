// #docplaster

// #docregion
import {Component, OnInit} from 'angular2/angular2';
import {Crisis, CrisisService} from './crisis.service';
import {RouteParams, Router} from 'angular2/router';
// #docregion canDeactivate
import {CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../dialog.service';

// #enddocregion canDeactivate
import {ROUTE_NAMES} from './routes';

@Component({
  // #docregion template
  template: `
  <div *ng-if="crisis">
    <h3>"{{editName}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ng-model)]="editName" placeholder="name"/>
    </div>
    <button (click)="save()">Save</button>
    <button (click)="cancel()">Cancel</button>
  </div>
  `,
  // #enddocregion template
  styles: ['input {width: 20em}']
})
// #docregion canDeactivate, cancel-save
export class CrisisDetailComponent implements OnInit, CanDeactivate {

  public crisis: Crisis;
  public editName: string;

// #enddocregion canDeactivate, cancel-save
  constructor(
    private _service: CrisisService,
    private _router: Router,
    private _routeParams: RouteParams,
    private _dialog: DialogService
    ) { }

  // #docregion onInit
  onInit() {
    let id = +this._routeParams.get('id');
    this._service.getCrisis(id).then(crisis => {
      if (crisis) {
        this.editName = crisis.name;
        this.crisis = crisis;
      } else { // id not found
        this.gotoCrises();
      }
    });
  }
  // #enddocregion onInit
  
  // #docregion canDeactivate
  canDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.crisis ||
           this.crisis.name === this.editName ||
           this._dialog.confirm('Discard changes?');
  }
  // #enddocregion canDeactivate

  // #docregion cancel-save
  cancel() {
    this.editName = this.crisis.name;
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }
  // #enddocregion cancel-save

  // #docregion gotoCrises
  gotoCrises() {
    let route = this.crisis ?
      [ROUTE_NAMES.crisisList, {id: this.crisis.id}] :
      [ROUTE_NAMES.crisisCenter];

    this._router.navigate(route);
  }
  // #enddocregion gotoCrises
// #docregion canDeactivate, cancel-save
}
// #enddocregion canDeactivate, cancel-save
// #enddocregion

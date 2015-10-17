// #docplaster

// #docregion
import {Component, OnInit} from 'angular2/angular2';
import {Crisis, CrisisService} from './crisis.service';
import {Router, RouteParams} from 'angular2/router';
import {ROUTE_NAMES} from './routes';

@Component({
  template: `
    <ul>
      <li *ng-for="#crisis of crises"
        [class.selected]="isSelected(crisis)"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `,
})
export class CrisisListComponent implements OnInit {
  public crises: Crisis[];
  // #docregion isSelected
  private _selectedId: number;

  constructor(
    private _service: CrisisService,
    private _router: Router,
    routeParams: RouteParams) {
      this._selectedId = +routeParams.get('id');
  }
  // #enddocregion isSelected

  onInit() {
    this._service.getCrises().then(crises => this.crises = crises);
  }
  // #docregion isSelected

  isSelected(crisis: Crisis) { return crisis.id === this._selectedId; }
  // #enddocregion isSelected

  // #docregion select
  onSelect(crisis: Crisis) {
    this._router.navigate(
      [ROUTE_NAMES.crisisDetail, { id: crisis.id }]
    );
  }
  // #enddocregion select
}

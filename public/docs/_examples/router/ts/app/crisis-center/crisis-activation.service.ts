import {Injectable, provide} from 'angular2/core';
import {makeDecorator} from 'angular2/src/core/util/decorators';
import {ComponentInstruction, Router} from 'angular2/router';


@Injectable()
export class CrisisActivationService {
  // Todo: inject whatever we need besides the router
  constructor(private _router: Router) {
    CrisisActivationService.canActivate = this._canActivate.bind(this);
  }

  private _canActivate(next: ComponentInstruction, prev: ComponentInstruction){
    var params = next.params;
    if (4 === +params['id']) {
      console.log('You can\'t handle the procrastination crisis!');
      this._router.navigate(['CrisisList']);
    }
    return true;
  }

  static canActivate:(next: ComponentInstruction, prev: ComponentInstruction) => Promise<boolean>| boolean =
  ()=>{
    return true;
  }
}

export const canActivate = (next: ComponentInstruction, prev: ComponentInstruction) =>
  CrisisActivationService.canActivate(next, prev);

class CanActivateDecorator {
  fn = CrisisActivationService.canActivate;
}

export const CanActivate: () => ClassDecorator = makeDecorator(CanActivateDecorator);

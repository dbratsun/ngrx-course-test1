import { Injectable } from '@angular/core';
import { RolesService } from "app/services/roles.service";
import { Actions, Effect } from '@ngrx/effects';
import { LOAD_APP_ROLES_ACTION, AppRolesLoadedAction } from "../../store/actions";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
// import 'rxjs/add/operator/switchMap'; - defined in main.ts

@Injectable()
export class LoadRolesEffectService {

  constructor(private actions$: Actions, private rolesService: RolesService) { }

  @Effect() appRoles$: Observable<Action> = this.actions$
    .ofType(LOAD_APP_ROLES_ACTION)
    .switchMap(() => this.rolesService.loadApplicationRoles())
    .map(allApplicationData => new AppRolesLoadedAction(allApplicationData))

}

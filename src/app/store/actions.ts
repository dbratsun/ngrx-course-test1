
import { Action } from "@ngrx/store";
import { AllApplicationData } from "shared/to/all-application-data";

export const APP_ROLES_LOADED_ACTION = 'APP_ROLES_LOADED_ACTION';
export const LOAD_APP_ROLES_ACTION = 'LOAD_APP_ROLES_ACTION';
export const ROLE_SELECTED_ACTION = 'ROLE_SELECTED_ACTION';

export class LoadAppRolesAction implements Action {
    readonly type: string = LOAD_APP_ROLES_ACTION;
}

export class AppRolesLoadedAction implements Action {
    readonly type: string = APP_ROLES_LOADED_ACTION;
    
    constructor(public payload?: AllApplicationData) {}
}

export class RoleSelectedAction implements Action {
    readonly type: string = ROLE_SELECTED_ACTION;

    constructor(public payload: number) {

    }
}  
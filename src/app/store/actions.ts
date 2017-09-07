
import { Action } from "@ngrx/store";
import { AllApplicationData } from "shared/to/all-application-data";

export const LOAD_APP_ROLES_ACTION = 'LOAD_APP_ROLES_ACTION';

export class LoadAppRolesAction implements Action {
    readonly type: string = LOAD_APP_ROLES_ACTION;
    
    constructor(public payload?: AllApplicationData) {}
}
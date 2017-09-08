import { StoreData } from "app/store/store-data";
import { Action } from "@ngrx/store";
import { APP_ROLES_LOADED_ACTION, AppRolesLoadedAction } from "app/store/actions";
import * as _ from "lodash";

export function storeData(state: StoreData, action: Action) {
    switch (action.type) {
      case APP_ROLES_LOADED_ACTION: 
        return handleLoadAppRolesAction(state, action);
      default:
        return state;
    }
}  

function handleLoadAppRolesAction(state: StoreData, action: AppRolesLoadedAction): StoreData {
    return {
      applications: _.keyBy(action.payload.applications, 'id'),
      roles: _.keyBy(action.payload.roles, 'id'),
      users: _.keyBy(action.payload.users, 'id')
    };
}
  
  
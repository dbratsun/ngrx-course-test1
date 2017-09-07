import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationSectionComponent } from './application-section/application-section.component';
import { RoleSectionComponent } from './role-section/role-section.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RolesService } from "app/services/roles.service";
import { HttpModule } from "@angular/http";
import { StoreModule, Action } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE, ApplicationState } from "app/store/application-state";
import { LOAD_APP_ROLES_ACTION, LoadAppRolesAction } from "app/store/actions";
import * as _ from 'lodash';

function storeReducer(state: ApplicationState = INITIAL_APPLICATION_STATE, action: Action): ApplicationState {
  switch (action.type) {
    case LOAD_APP_ROLES_ACTION: 
      return handleLoadAppRolesAction(state, action);
    default:
      return state;      
  }
  
}

function handleLoadAppRolesAction(state: ApplicationState, action: LoadAppRolesAction): ApplicationState {
  const userData = action.payload;
  const newState: ApplicationState = Object.assign({}, state);
  newState.storeData = {
    applications: _.keyBy(action.payload.applications, 'id'),
    roles: _.keyBy(action.payload.roles, 'id'),
    users: _.keyBy(action.payload.users, 'id')
  }
  return newState;
}

@NgModule({
  declarations: [
    AppComponent,
    ApplicationSectionComponent,
    RoleSectionComponent,
    UserSectionComponent,
    UserListComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // StoreModule.forRoot({}, INITIAL_APPLICATION_STATE) - for version 4
    StoreModule.provideStore(storeReducer)
  ],
  providers: [RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

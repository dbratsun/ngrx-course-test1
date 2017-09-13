import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApplicationSelectionComponent } from './application-selection/application-selection.component';
import { RoleSectionComponent } from './role-section/role-section.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RolesService } from "app/services/roles.service";
import { HttpModule } from "@angular/http";
import { StoreModule, Action, combineReducers } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE, ApplicationState } from "app/store/application-state";
import { AppRolesLoadedAction, APP_ROLES_LOADED_ACTION } from "app/store/actions";
import * as _ from 'lodash';
import { EffectsModule } from "@ngrx/effects";
import { LoadRolesEffectService } from "app/store/effects/load-roles-effect.service";

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UiState, INITIAL_UI_STATE } from "app/store/ui-state";
import { StoreData } from "app/store/store-data";
import { uiState } from "app/store/reducers/uiStateReducer";
import { storeData } from "app/store/reducers/uiStoreDataReducer";

const reducers = {
  uiState: uiState,
  storeData: storeData
}

const combinedReducer = combineReducers(reducers);

@NgModule({
  declarations: [
    AppComponent,
    ApplicationSelectionComponent,
    RoleSectionComponent,
    UserSectionComponent,
    UserListComponent,
    RoleListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // StoreModule.forRoot({}, INITIAL_APPLICATION_STATE) - for version 4
    StoreModule.provideStore(combinedReducer, INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoadRolesEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()     // s. lesson 36, 37, 38 
  ],
  providers: [RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { RolesService } from "app/services/roles.service";
import { Store } from "@ngrx/store";
import { ApplicationState } from "app/store/application-state";
import { AppRolesLoadedAction, LoadAppRolesAction } from "app/store/actions";
import 'rxjs/add/operator/skip';
import { Observable } from "rxjs/Observable";
import { IRole } from "shared/model/role";
import * as _ from 'lodash';
import * as lf from 'lodash.flatmapdeep';
import { RoleSummaryVM } from "app/role-section/role-summary.vm";
import { IUser } from "shared/model/user";
import { stateToRoleSummariesSelector } from "app/role-section/stateToRoleSummariesSelector";

@Component({
  selector: 'role-section',
  templateUrl: './role-section.component.html',
  styleUrls: ['./role-section.component.css']
})
export class RoleSectionComponent implements OnInit {

  applicationName$: Observable<string>;
  userCount$: Observable<number>;
  roleSummaries$: Observable<RoleSummaryVM[]>;

  constructor(/*private rolesService: RolesService,*/ private store: Store<ApplicationState>) { 
    this.applicationName$ = store.select(this.userNameSelector);
    this.userCount$ = store.map(this.mapStateToUserCount);
    this.roleSummaries$ = store.select(stateToRoleSummariesSelector);
    /*
    this.roleSummaries$ = store.select(
      state => {
        const roles = _.values<IRole>(state.storeData.roles);
        return roles.map(role => {

          const names = _.keys(role.users).map(
            userId => state.storeData.users[userId].name 
          )

          return {
            id: role.id,
            roleName: role.name,
            userNames: _.join(names, ", ")
          }
        });
      }
    )
    */
  }

  userNameSelector(state: ApplicationState): string {
    const currentAppId = state.uiState.applicationId,
          currentApp = state.storeData.applications[currentAppId];
    if (!currentApp) {
      return "";
    }
    return currentApp.name;
  }

  mapStateToUserCount(state: ApplicationState): number {
    // debugger;
    if (!state.uiState.applicationId) {
      return null;
    }

    const currentAppId = state.uiState.applicationId;

    const roles = _.values<IRole>(state.storeData.roles);
    let allusers = new Array<string>();

    roles.forEach(item => {
      let users = _.keys(item.users);
      users.forEach(i => {
        allusers.push(i);
      })
    })

    return _.size(_.uniq(allusers));
    
    /*
    console.log(_.values<IRole>(state.storeData.roles));
    return _.values<IRole>(state.storeData.roles)
      .reduce(
        (acc, role) => {
          console.log(_.size(role.users));
          return acc + _.size(role.users);
        },
        0
      )
    */  
  }

  ngOnInit() {
    this.store.dispatch(new LoadAppRolesAction());
    /*
    this.rolesService.loadApplicationRoles().subscribe(
      allApplicationData => this.store.dispatch(new AppRolesLoadedAction(allApplicationData)) 
    )
    */
  }
 
  onRoleSelected(selectedRoleId: number) {
    // this.store.dispatch(new RoleSelectedAction(selectedRoleId));  
  }

}

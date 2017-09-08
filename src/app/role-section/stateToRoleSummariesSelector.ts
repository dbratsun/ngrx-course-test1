import { ApplicationState } from "app/store/application-state";
import { RoleSummaryVM } from "app/role-section/role-summary.vm";
import { IRole } from "shared/model/role";
import * as _ from 'lodash';

export function stateToRoleSummariesSelector(state: ApplicationState): RoleSummaryVM[] {
    debugger;
    const roles = _.values<IRole>(state.storeData.roles);
    return roles.map(_.partial(mapRoleToRoleSummary, state));
  }  

function  mapRoleToRoleSummary(state: ApplicationState, role: IRole): RoleSummaryVM {
    const names = _.keys(role.users).map(
      userId => state.storeData.users[userId].name
    )
    return {
      id: role.id,
      roleName: role.name,
      userNames: _.join(names, ", ")
    }
  }

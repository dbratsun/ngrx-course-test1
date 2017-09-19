import { ApplicationState } from "app/store/application-state";
import { UserVM } from "app/user-section/user.vm";
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import { User } from "shared/model/user";

export function userSelector(state: ApplicationState): UserVM[] {
    const currentRoleId = state.uiState.currentRoleId;
    if (!currentRoleId) {
        return [];
    }
    const userIds = state.storeData.roles[state.uiState.currentRoleId].users;
    const users = _.keys(userIds).map(userId => state.storeData.users[userId]);
    return users.map(_.partial(mapUserToUserVM, state));
}

function mapUserToUserVM(state: ApplicationState, user: User): UserVM {
    return {
        id: user.id,
        name: user.name,
        fullName: user.fullName,
        created: user.created
    }   
}

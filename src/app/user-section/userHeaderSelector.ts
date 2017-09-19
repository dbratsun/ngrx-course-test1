import { ApplicationState } from "app/store/application-state";

export function userHeaderSelector(state: ApplicationState): string {
    const currentRoleId = state.uiState.currentRoleId;
    if (!currentRoleId) {
        return "";
    }
    return state.storeData.roles[currentRoleId].name;
}


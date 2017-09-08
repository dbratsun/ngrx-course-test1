import { UiState, INITIAL_UI_STATE } from "app/store/ui-state";
import { Action } from "@ngrx/store";
import { ROLE_SELECTED_ACTION } from "app/store/actions";

export function uiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {
    switch (action.type) {
      
    case ROLE_SELECTED_ACTION:
        const newState = Object.assign({}, state);
        newState.currentRoleId = action.payload;
        return newState;
      
    default:
        return state;
    }    
}

  
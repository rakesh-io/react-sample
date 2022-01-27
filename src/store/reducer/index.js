import { INITIAL_STATE, INCREMENT_BUTTON_COUNTER, SET_LAST_BUTTON } from "../../constants/storeConstants";

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREMENT_BUTTON_COUNTER:
            return { ...state, buttonCounter: state.buttonCounter + 1 };
        case SET_LAST_BUTTON:
            return { ...state, lastButtonClicked: action.payload }
        default:
            return state;
    }
}
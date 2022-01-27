import { INCREMENT_BUTTON_COUNTER, SET_LAST_BUTTON } from "../../constants/storeConstants";

export const incrementButtonCounter = () => {
    return { type: INCREMENT_BUTTON_COUNTER };
}

export const setLastButton = (payload) => {
    return { type: SET_LAST_BUTTON, payload }
}
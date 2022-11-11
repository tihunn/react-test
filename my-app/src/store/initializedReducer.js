import {authAPI} from "../DAL/api";

let initialState = {
    isInitialized: false,
};

export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "initialized":
            return {
                ...state,
                isInitialized: true
            }
    }
    return state
}

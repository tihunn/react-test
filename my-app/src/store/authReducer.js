let initialState = {
    data: {
        id: 2,
    },
    isAuth: false,
    ava: null,
    name: "not authorized"
};

export let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setAuthData":
            return {
                ...state,
                ...state.data,
                data: action.authData,
                isAuth: true
            }
        case "setAvaAndName":
            return {
                ...state,
                ava: action.avaAndName.ava,
                name: action.avaAndName.name
            }

    }
    return state
}

export const setAuthData = (authData) => ({type: "setAuthData", authData: authData});
export const setAvaAndName = (ava, name) => ({ type: "setAvaAndName", avaAndName: {ava, name} });

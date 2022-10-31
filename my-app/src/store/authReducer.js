import {authAPI} from "../DAL/api";

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

const setAuthData = (authData) => ({type: "setAuthData", authData: authData});
const setAvaAndName = (ava, name) => ({ type: "setAvaAndName", avaAndName: {ava, name} });

export const getAuthData = () => (dispatch) => {
    authAPI.isAuth().then(data => {
        dispatch( setAuthData(data.data) );
        if (data.resultCode === 0) {
            authAPI.getAvaAndName(data.data.id).then(response => {
                dispatch( setAvaAndName(response.data.photos.small, response.data.fullName) );
            })
        }
    })
}
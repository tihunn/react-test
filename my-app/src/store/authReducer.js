import {authAPI} from "../DAL/api";

let initialState = {
    data: {},
    isAuth: false,
    ava: null,
    name: "not authorized",
    isInitialized: false,
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
        case "deleteAuth":
            return {
                ...state,
                data: {},
                isAuth: false,
                ava: null,
                name: "not authorized"
            }
        case "initialized":
            return {
                ...state,
                isInitialized: true
            }
    }
    return state
}

const setAuthData = (authData) => ({type: "setAuthData", authData: authData});
const setAvaAndName = (ava, name) => ({type: "setAvaAndName", avaAndName: {ava, name}});
const deleteAuth = () => ({type: "deleteAuth"});
const initialized = () => ({type: "initialized"});

export const initialize = () => (dispatch) => {
    authAPI.isAuth().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(data.data));
            dispatch(setAvaAndName(null, data.data.login))
            authAPI.getAvaAndName(data.data.id).then(response => {
                dispatch(setAvaAndName(response.data.photos.small, response.data.fullName));
            })
            dispatch( initialized() )
        } else {dispatch( initialized() )}
    })
}

export const logOut = () => (dispatch) => {
    authAPI.logOut().then(data => {
        if (data.resultCode === 0) {
            dispatch(deleteAuth());
        }
    })
}

export const postLogin = (login) => (dispatch) => {
    authAPI.postLogin(login).then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(data.data));
            authAPI.getAvaAndName(data.data.userId).then(response => {
                dispatch(setAvaAndName(response.data.photos.small, response.data.fullName));
            })
        }
    })
}

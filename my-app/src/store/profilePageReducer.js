import {profileAPI} from "../DAL/api";
import {toggleIsFetching} from "./preloaderReducer";

let initialState = {
    postData: [
        {id: 1, post: "it's new post", likes: 7},
        {id: 2, post: "this is Sparta!", likes: 0},
    ],
    profileData: {
        contacts: {},
        photos: {
            large: null,
            small: null
        }
    },
    status: "enter your text",
};

export let profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "newPostPush":
            return {
                ...state,
                postData: [...state.postData, {id: 3, post: action.textNewPost, likes: 0}],
                textareaPost: "",
            };
        case "updateTextareaPost":
            return {
                ...state,
                textareaPost: action.enteredText
            };
        case "setProfile":
            return {
                ...state,
                profileData: action.profile
            };
        case "setStatus":
            return {
                ...state,
                status: action.status ? action.status : "-"
            };
    }
    return state;
};

export const updateTextareaPost = (enteredText) => ({type: "updateTextareaPost", enteredText: enteredText});
export const pushPost = (textNewPost) => ({type: "newPostPush", textNewPost: textNewPost});
const setProfile = (profile) => ({type: "setProfile", profile: profile});
export const setStatus = (status) => ({type: "setStatus", status: status});

export const requestProfile = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.getProfile(userId).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setProfile(data));
    })
}

export const requestStatus = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.getStatus(userId).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setStatus(data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.updateStatus(status).then(response => {
        dispatch(toggleIsFetching(false));
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}
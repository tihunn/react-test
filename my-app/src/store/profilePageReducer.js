let initialState = {
    postData: [
        {id: 1, post: "it's new post", likes: 7},
        {id: 2, post: "this is Sparta!", likes: 0},
    ],
    textareaPost: "Entered text new post",
    profileData: {
        contacts: {},
        photos: {
            large: null,
            small: null
        }
    },
};

export let profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "newPostPush":
            let body = state.textareaPost;
            return {
                ...state,
                postData: [...state.postData, {id: 3, post: body, likes: 0} ],
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
    }
    return state;
};

export const updateTextareaPost = (enteredText) => ({type: "updateTextareaPost", enteredText: enteredText});
export const pushPost = () => ({type: "newPostPush"});
export const setProfile = (profile) => ({type: "setProfile", profile: profile});

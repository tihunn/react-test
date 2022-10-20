let initialState = {
    postData: [
        {id: 1, post: "it's new post", likes: 7},
        {id: 2, post: "this is Sparta!", likes: 0},
    ], textareaPost: "Entered text new post"
};

export let postPageReducer = (state = initialState, action) => {
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
    }
    return state;
};

export const updateTextareaPostCreator = (enteredText) => ({type: "updateTextareaPost", enteredText: enteredText});
export const newPostPushCreator = () => ({type: "newPostPush"});

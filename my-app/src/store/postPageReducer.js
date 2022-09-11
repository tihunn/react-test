let initialState = {
    postData: [
        {id: 1, post: "it's new post", likes: 7},
        {id: 2, post: "this is Sparta!", likes: 0},
    ], textareaPost: "Entered text new post"
};

export let postPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "newPostPush":
            let statePost = state.textareaPost;
            state.postData.push({id: 3, post: statePost, likes: 0});
            state.textareaPost = "";
            break;
        case "updateTextareaPost":
            state.textareaPost = action.enteredText;
            break;
    }
    return state;
};

export const updateTextareaPostCreator = (enteredText) => ({type: "updateTextareaPost", enteredText: enteredText});
export const newPostPushCreator = () => ({type: "newPostPush"});

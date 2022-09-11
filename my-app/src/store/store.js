export let store = {
    _renderEntireTree() {
    }, _state: {
        dialogPage: {
            messagesData: [
                {id: 1, message: "hi"},
                {id: 2, message: "how i you?"},
                {id: 3, message: "norm"},
            ], dialogsData: [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Masha"},
                {id: 3, name: "Viktor"},
                {id: 4, name: "Vika"},
            ], newTextMessage: 'here something',
        }, profilePage: {
            postData: [
                {id: 1, post: "it's new post", likes: 7},
                {id: 2, post: "this is Sparta!", likes: 0},
            ], textareaPost: "Entered text new post"
        }
    }, _newMessagePush(newMessage) {
        this._state.dialogPage.messagesData.push({id: 4, message: newMessage});
        this._state.dialogPage.newTextMessage = "";
        this._renderEntireTree(this);
    }, _onChange(enteredText) {
        this._state.dialogPage.newTextMessage = enteredText;
        this._renderEntireTree(this);
    }, _newPostPush() {
        let statePost = this._state.profilePage.textareaPost;
        this._state.profilePage.postData.push({id: 3, post: statePost, likes: 0});
        this._state.profilePage.textareaPost = "";
        this._renderEntireTree(this);
    }, _updateTextareaPost(enteredText) {
        this._state.profilePage.textareaPost = enteredText;
        this._renderEntireTree(this);
    }, dispatch(action) {
        if (action.type === "newMessagePush") {
            this._newMessagePush(action.newMessage)
        } else if (action.type === "onChange") {
            this._onChange(action.enteredText)
        } else if (action.type === "newPostPush") {
            this._newPostPush()
        } else if (action.type === "updateTextareaPost") {
            this._updateTextareaPost(action.enteredText)
        }
    }, subscribe(observer) {
        this._renderEntireTree = observer;
    }, getState() {
        return this._state;
    },
}

export const updateTextInStateCreator = (enteredText) => ({type: "onChange", enteredText: enteredText});
export const addMessageCreator = (enteredText) => ({type: "newMessagePush", newMessage: enteredText});
export const updateTextareaPostCreator = (enteredText) => ({type: "updateTextareaPost", enteredText: enteredText});
export const newPostPushCreator = () => ({type: "newPostPush"});


window.store = store;








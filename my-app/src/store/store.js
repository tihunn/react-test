import {dialogsPageReducer} from "./dialogsPageReducer";
import {postPageReducer} from "./postPageReducer";

export let store = {
    _state: {
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
    }, _callSubscriber() {
    }, dispatch(action) {
        this._state.dialogPage = dialogsPageReducer(this._state.dialogPage, action);
        this._state.profilePage = postPageReducer(this._state.profilePage, action);
        this._callSubscriber(this);
    }, subscribe(observer) {
        this._callSubscriber = observer;
    }, getState() {
        return this._state;
    },
}

window.store = store;

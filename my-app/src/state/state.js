export let store = {
    _renderEntireTree ()  {},
    _state: {
        messagesData: [
            {id: 1, message: "hi"},
            {id: 2, message: "how i you?"},
            {id: 3, message: "norm"},
        ],
        dialogsData: [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Masha"},
            {id: 3, name: "Viktor"},
            {id: 4, name: "Vika"},
        ],
        newTextMessage: 'here something',

    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    },
    getState(){
        return this._state;
    },

    _newMessagePush(newMessage) {
        this._state.messagesData.push({id: 4, message: newMessage});
        this._state.newTextMessage = "";
        this._renderEntireTree(this);
    },
    _onChange(enteredText) {
        this._state.newTextMessage = enteredText;
        this._renderEntireTree(this);
    },

    dispatch(action) {
        if (action.type === "newMessagePush") {
            this._newMessagePush(action.newMessage)
        } else if (action.type === "onChange") {
            this._onChange(action.enteredText)
        }
    }
}

window.store = store;








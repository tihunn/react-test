let initialState = {
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
}

export let dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "newMessagePush":
            state.messagesData.push({id: 4, message: action.newMessage});
            state.newTextMessage = "";
            break;
        case "onChange":
            state.newTextMessage = action.enteredText;
            break;
    }
    return state
}

export const onMessageChangeCreator = (enteredText) => ({type: "onChange", enteredText: enteredText});
export const addMessageCreator = (enteredText) => ({type: "newMessagePush", newMessage: enteredText});

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
    ],
}

export let dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addMessage":
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: action.newMessage}],
                newTextMessage: "",
            }
    }
    return state
}

export const addMessage = (enteredText) => ({type: "addMessage", newMessage: enteredText});

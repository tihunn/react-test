import {renderEntireTree} from "./render";

let state = {
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

}

window.state = state;

export default state;

export let newMessagePush = (newMessage) => {
    state.messagesData.push( {id:4, message: newMessage} );
    renderEntireTree(state, newMessagePush, onChange);
};

export let onChange = (enteredText) => {
    state.newTextMessage = enteredText;
    renderEntireTree(state, newMessagePush, onChange);
}
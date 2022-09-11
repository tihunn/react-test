import React from 'react';
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import {addMessageCreator, onMessageChangeCreator} from "../../../store/dialogsPageReducer";


export default function Dialogs(props) {
debugger
    let dialogsElements = props.data.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.data.messagesData.map(message => <Message message={message.message}/>)

    let newMessageElement = React.createRef ();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(addMessageCreator(text));
    }
    let updateTextInState = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageChangeCreator(text))
    }

    return <div className={css.dialogs}>
        <div className={css.dialogueChoice}>
                {dialogsElements}
        </div>
        <div className={css.messages}>
            {messagesElements}
            <textarea
                ref={newMessageElement}
                value={props.data.newTextMessage}
                onChange={updateTextInState}
            />
            <button onClick={addMessage}>кнопка</button>
        </div>
    </div>
}



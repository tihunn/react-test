import React from 'react';
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";


export default function Dialogs(props) {

    let dialogsElements = props.data.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.data.messagesData.map(message => <Message message={message.message}/>)

    let newMessageElement = React.createRef ();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.newMessagePush(text);
        newMessageElement.current.value = '';
    }
    let updateTextInState = () => {
        debugger
        let text = newMessageElement.current.value;
        props.onChange(text);
    }

    window.text = props.state;
    window.data = props.data;

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



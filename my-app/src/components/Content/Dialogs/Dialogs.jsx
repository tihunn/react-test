import React from 'react';
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";


export default function Dialogs(props) {

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>)

    return <div className={css.dialogs}>
        <div className={css.dialogueChoice}>
                {dialogsElements}
        </div>
        <div className={css.messages}>
            {messagesElements}
        </div>
    </div>
}

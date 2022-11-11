import React from "react";
import css from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";
import {Field, Form, Formik} from "formik";

export default function Dialogs(props) {
    let dialogsElements = props.stateDialogsPage.dialogsData.map(dialog => <Dialog key={dialog.id}
                                                                                   name={dialog.name}
                                                                                   id={dialog.id}/>)
    let messagesElements = props.stateDialogsPage.messagesData.map(message => <Message key={message.id}
                                                                                       message={message.message}/>)

    let onSubmit = (values, {setSubmitting}) => {
        props.addMessage(values.newMessage)
        values.newMessage = ""
        setSubmitting(false);
    }

    return <div className={css.dialogs}>
        <div className={css.dialogueChoice}>
            {dialogsElements}
        </div>
        <div className={css.messages}>
            {messagesElements}
            <Formik initialValues={{newMessage: "your message"}} onSubmit={onSubmit}>
                {({isSubmitting}) => (
                    <Form>
                        <Field type="textarea" name="newMessage"/>
                        <button type="submit" disabled={isSubmitting}>
                            Post
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
}



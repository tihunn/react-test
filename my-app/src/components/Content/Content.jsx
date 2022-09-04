import React from 'react';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialog from "./Dialogs/Dialogs";

const Content = (props) => {

debugger
    return <div className="content">
        <Routes>
            <Route path="/profile/*" element={<Profile/>} />
            <Route path="/dialog/*" element={
                <Dialog
                    messagesData={props.data.messagesData}
                    dialogsData={props.data.dialogsData}
                    newTextMessage={props.data.newTextMessage}
                    newMessagePush={props.newMessagePush}
                    onChange={props.onChange}
                />} />
        </Routes>
    </div>
}
export default Content;


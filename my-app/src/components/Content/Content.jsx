import React from 'react';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialog from "./Dialogs/Dialogs";

const Content = () => {

    let dialogsData = [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Viktor"},
        {id: 4, name: "Vika"},
    ]

    let messagesData = [
        {id: 1, message: "hi"},
        {id: 1, message: "how i you?"},
        {id: 1, message: "norm"},

    ]

    return <div className="content">
        <Routes>
            <Route path="/profile" element={<Profile/>} />
            <Route path="/dialog" element={<Dialog messagesData={messagesData} dialogsData={dialogsData}/>} />
        </Routes>
    </div>
}
export default Content;


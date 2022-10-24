import React from 'react';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = (props) => {
    return <div className="content">
        <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
            <Route path="/dialog/*" element={<DialogsContainer/>} />
            <Route path="/users/*" element={<UsersContainer/>} />
        </Routes>
    </div>
}
export default Content;


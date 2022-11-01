import React from "react";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import LoginContainer from "../Auth/LoginContainer";

const Content = (props) => {
    return <div className="content">
        <Routes>
            <Route path="/profile/" element={<ProfileContainer/>} />
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
            <Route path="/dialog/*" element={<DialogsContainer/>} />
            <Route path="/users/*" element={<UsersContainer/>} />
            <Route path="/login/*" element={<LoginContainer/>} />
        </Routes>
    </div>
}
export default Content;
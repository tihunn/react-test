import React from "react";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import LoginContainer from "../Auth/Login/LoginButtonContainer";
import PageLoginContainer from "../Auth/Login/PageLogin/PageLoginContainer";

const Content = (props) => {
    return <div className="content">
        <Routes>
            <Route path="/profile" element={<ProfileContainer/>} />
            <Route path="/profile/:userId" element={<ProfileContainer/>} />
            <Route path="/dialog" element={<DialogsContainer/>} />
            <Route path="/users" element={<UsersContainer/>} />
            <Route path="/auth" element={<LoginContainer/>} />
            <Route path="/auth/login" element={<PageLoginContainer/>} />
        </Routes>
    </div>
}
export default Content;
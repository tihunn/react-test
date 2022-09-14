import React from 'react';
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Content = (props) => {
    return <div className="content">
        <Routes>
            <Route path="/profile/*" element={<ProfileContainer/>} />
            <Route path="/dialog/*" element={<DialogsContainer/>} />
            <Route path="/users/*" element={<UsersContener/>} />
        </Routes>
    </div>
}
export default Content;


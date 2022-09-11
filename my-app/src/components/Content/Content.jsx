import React from 'react';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Content = (props) => {
debugger
    window.state = props.state
    return <div className="content">
        <Routes>
            <Route path="/profile/*" element={<Profile
                data={props.state.profilePage}
                dispatch={props.dispatch}
            />}/>
            <Route path="/dialog/*" element={<Dialogs
                data={props.state.dialogsPage}
                dispatch={props.dispatch}
            />}/>
        </Routes>
    </div>
}
export default Content;


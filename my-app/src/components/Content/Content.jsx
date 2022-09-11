import React from 'react';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

const Content = (props) => {

    let state = props.store.getState()

    return <div className="content">
        <Routes>
            <Route path="/profile/*" element={<Profile
                data={state.profilePage}
                dispatch={props.store.dispatch.bind(props.store)}
            />}/>
            <Route path="/dialog/*" element={<Dialogs
                data={state.dialogPage}
                dispatch={props.store.dispatch.bind(props.store)}
            />}/>
        </Routes>
    </div>
}
export default Content;


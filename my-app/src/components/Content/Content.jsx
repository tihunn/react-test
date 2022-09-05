import React from 'react';
import Profile from "./Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Dialog from "./Dialogs/Dialogs";

const Content = (props) => {


    return <div className="content">
        <Routes>
            <Route path="/profile/*" element={<Profile/>} />
            <Route path="/dialog/*" element={
                <Dialog
                    data={props.store.getState()}
                    dispatch={props.store.dispatch.bind(props.store)}
                />} />
        </Routes>
    </div>
}
export default Content;


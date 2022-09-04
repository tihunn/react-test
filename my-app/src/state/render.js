import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {newMessagePush} from "./state";
import App from "../App";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state, newMessagePush, onChange) => {
    debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App data={state} newMessagePush={newMessagePush} onChange={onChange}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}



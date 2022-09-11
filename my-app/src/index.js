import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./store/reduxStore";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());
store.subscribe(() => {
    renderEntireTree(store.getState());
});
reportWebVitals();

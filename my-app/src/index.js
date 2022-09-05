import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./state/state";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
let renderEntireTree = (store) => {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderEntireTree(store);
store.subscribe(renderEntireTree);
reportWebVitals();

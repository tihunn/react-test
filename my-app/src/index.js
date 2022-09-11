import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./store/store";
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
window.store2 = store;
renderEntireTree(store);
store.subscribe(renderEntireTree);
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";import "./index/index.css";
import reportWebVitals from "./index/reportWebVitals";
import store from "./store/reduxStore";
import {Provider} from "react-redux";
import AppContainer from "./index/AppContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
    );

reportWebVitals();

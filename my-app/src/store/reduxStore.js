import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {usersPageReducer} from  "./usersPageReducer"
import {preloaderReducer} from "./preloaderReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    preloader: preloaderReducer,
    auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));


export default store;
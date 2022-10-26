import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {usersPageReducer} from  "./usersPageReducer"
import {preloaderReducer} from "./preloaderReducer";
import {authReducer} from "./authReducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    preloader: preloaderReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;
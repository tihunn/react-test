import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {usersPageReducer} from  "./usersPageReducer"
import {preloaderReducer} from "./preloaderReducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    preloader: preloaderReducer,
});

let store = createStore(reducers);

export default store;
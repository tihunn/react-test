import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {profilePageReducer} from "./profilePageReducer";
import {usersPageReducer} from  "./usersPageReducer"

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
});

let store = createStore(reducers);

export default store;
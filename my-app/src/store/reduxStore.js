import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {postPageReducer} from "./postPageReducer";
import {usersPageReducer} from  "./usersPageReducer"

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: postPageReducer,
    usersPage: usersPageReducer,
});

let store = createStore(reducers);

export default store;
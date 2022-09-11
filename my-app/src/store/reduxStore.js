import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./dialogsPageReducer";
import {postPageReducer} from "./postPageReducer";

let reducers = combineReducers({
    dialogsPage: dialogsPageReducer,
    profilePage: postPageReducer,
});

let store = createStore(reducers);

export default store;
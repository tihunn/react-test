import './index.css';
import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from "./state/render";
import state, {newMessagePush, onChange} from "./state/state";

renderEntireTree(state, newMessagePush, onChange);
reportWebVitals();

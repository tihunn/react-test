import React from 'react';
import css from "./Profile.module.css";
import Post from "./Post/Post";
import {newPostPushCreator, updateTextareaPostCreator} from "../../../store/postPageReducer";

export default function Profile(props) {

    let onPostChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateTextareaPostCreator(body))
    }
    let pushPost = () => {
        props.dispatch(newPostPushCreator())
    }

    let postElement = props.data.postData.map(dialog => <Post id={dialog.id} post={dialog.post} likes={dialog.likes}/>)

    return <div className={css.Profile}>
        {postElement}
        <textarea
            value={props.data.textareaPost}
            onChange={onPostChange}
        />
        <button onClick={pushPost}>Post push</button>
    </div>
}

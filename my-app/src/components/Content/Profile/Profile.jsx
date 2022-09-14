import React from 'react';
import css from "./Profile.module.css";
import Post from "./Post/Post";

export default function Profile(props) {

    let postElement = props.stateProfilePage.postData.map(dialog => <Post id={dialog.id} post={dialog.post}
                                                                          likes={dialog.likes}/>)

    let onPostChange = (event) => {
        let body = event.target.value;
        props.postChange(body);
    }

    return <div className={css.Profile}>
        {postElement}
        <textarea
            value={props.stateProfilePage.textareaPost}
            onChange={onPostChange}
        />
        <button onClick={props.pushPost}>Post push</button>
    </div>
}

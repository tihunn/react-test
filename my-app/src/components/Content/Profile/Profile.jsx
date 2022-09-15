import React from 'react';
import css from "./Profile.module.css";
import Post from "./Post/Post";

export default function Profile(props) {

    let postElement = props.stateProfilePage.postData.map(post => <Post key={post.id}
                                                                        id={post.id}
                                                                        post={post.post}
                                                                        likes={post.likes}/>)

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

import React from 'react';
import css from "./Posts.module.css";
import Post from "./Post/Post";

export default function Posts(props) {

    let postElement = props.stateProfilePage.postData.map(post => <Post key={post.id}
                                                                        id={post.id}
                                                                        post={post.post}
                                                                        likes={post.likes}/>)

    let onPostChange = (event) => {
        let body = event.target.value;
        props.updateTextareaPost(body);
    }

    return <div className={css.Posts}>
        {postElement}
        <textarea
            value={props.stateProfilePage.textareaPost}
            onChange={onPostChange}
        />
        <button onClick={props.pushPost}>Post push</button>
    </div>
}

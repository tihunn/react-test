import React from 'react';
import Like from "../like.png";
import css from "./Profile.module.css";
import Post from "./Post/Post";


export default function Profile (Props) {
    return <div className={css.Profile}>
        <Post message="it's new post" likes={1} />
        <Post message="this is Sparta!" likes={10} />
    </div>
}

import React from 'react';
import Like from "../../like.png";
import css from "./Post.module.css";
import ava from "../../Ava.png";

export default function Post(props) {
    return <div className={css.post}>
        <div className={css.ava}>
            <img src={ava} alt="ava"/>
        </div>
        <div className={css.message}>
            {props.post}
        </div>
        <div className={css.divLike}>
            <img src={Like} alt="like"/>
            {props.likes}
        </div>
</div>
}

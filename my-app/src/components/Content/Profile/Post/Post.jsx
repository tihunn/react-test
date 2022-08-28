import React from 'react';
import Like from "../../like.png";
import css from "./Post.module.css";
import ava from "../../Ava.png";

export default function Post(Props) {
    return <div className={css.post}>
        <div className={css.ava}>
            <img src={ava} alt="ava"/>
        </div>
        <div className={css.message}>
            {Props.message}
        </div>
        <div className={css.divLike}>
            <img src={Like} alt="like"/>
            {Props.likes}
        </div>
</div>
}

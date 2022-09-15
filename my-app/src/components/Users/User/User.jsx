import React from "react";
import css from "./User.module.css"

export default function Users(props) {

    return <div className={css.user}>
        <img src={props.ava} className={css.ava}/>
        <div>{props.firstName} {props.lastName}</div>
        {props.following ?
            <button onClick={() => {props.unfollow(props.id)} } >follow</button> :
            <button onClick={() => {props.follow2(props.id)} }>unfollow</button>
        }
    </div>
}
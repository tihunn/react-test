import React from "react";
import css from "./User.module.css";
import defaultAva from "../../../common/Ava.png";
import {NavLink} from "react-router-dom";

export default function Users(props) {

    return <div className={css.user}>
        <NavLink to={`/profile/${props.id}`}>
            <img src={props.ava != null ? props.ava : defaultAva}
                 className={css.ava}/>
        </NavLink>
        <div>{props.firstName} </div>
        {props.followed ?
            <button onClick={() => {
                props.unfollow(props.id)
            }}>follow</button> :
            <button onClick={() => {
                props.follow(props.id)
            }}>unfollow</button>
        }
    </div>
}
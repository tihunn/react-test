import React from "react";
import css from "./User.module.css";
import {NavLink} from "react-router-dom";
import AvaAndName from "../../../common/AvaAndName/AvaAndName";

export default function User(props) {

    return <div>
        <NavLink to={`/profile/${props.id}`}>
            <AvaAndName ava={props.ava} name={props.name} className={css.ava}/>
        </NavLink>
        <div>
            {props.followed ?
                <button onClick={() => {
                    props.unfollow(props.id)
                }}>follow</button> :
                <button onClick={() => {
                    props.follow(props.id)
                }}>unfollow</button>
            }
        </div>
    </div>
}
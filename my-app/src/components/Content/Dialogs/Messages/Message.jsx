import React from 'react';
import css from "./Message.module.css";
import ava from "../../../common/Ava.png";

export default function Message (props) {
    return <div >
        <img src={ava} className={css.ava}/>
        {props.message}
    </div>
}

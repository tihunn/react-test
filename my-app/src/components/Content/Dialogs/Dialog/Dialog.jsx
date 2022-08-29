import React from 'react';
import css from "./Dialog.module.css";
import ava from "../../Ava.png";

export default function Dialog (props) {
    return <div >
        <img src={ava} className={css.ava}/>
        {props.name}
    </div>
}

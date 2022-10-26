import React from "react";
import defaultAva from "../defaultAva.png";
import css from "./AvaAndName.module.css"

export default function AvaAndName(props) {
    return <div className={css.user}>
            <img src={props.ava != null ? props.ava : defaultAva}
                 className={css.ava}/>

        <div className={css.name}>{props.name}</div>

    </div>
}
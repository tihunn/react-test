import React from "react";
import css from "./Pagination.module.css";

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return <div>
            {this.props.pagination()}
        </div>
    }


}
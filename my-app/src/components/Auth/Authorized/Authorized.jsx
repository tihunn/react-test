import React from "react";
import AvaAndName from "../../common/AvaAndName/AvaAndName";
import css from "./Authorized.module.css"


export default class Authorized extends React.Component {
    state = {
        isHide: true
    }

    onShowButton = () => {
        this.setState( {isHide: !this.state.isHide} )
        setTimeout( () => this.setState({isHide: true}), 3000 )
    }

    render() {
        return <>
            <div onMouseEnter={this.onShowButton} onClick={this.onShowButton}>
                <AvaAndName ava={this.props.ava} name={this.props.name}/>
            </div>
            <div hidden={this.state.isHide}>
                <button onClick={this.props.logOut}>Log Out</button>
            </div>
        </>
    }
}
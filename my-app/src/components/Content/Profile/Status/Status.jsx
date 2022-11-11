import React from "react";

export default class Status extends React.Component {
    componentDidMount() {
        this.props.setStatus(this.props.getStatus)
    }

    state = {
        editMode: false,
    }

    toggleEditMode = () => {
        this.setState( {editMode: !this.state.editMode})
    }
    deactivateEditMode = (e) => {
        this.setState( {editMode: false});
        this.props.updateStatus(e.currentTarget.value)
    }
    onChange = (e) => {
        this.props.setStatus(e.currentTarget.value)
    }

    render() {
        return <>
            {this.state.editMode ?
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} onChange={this.onChange}/> :
                <span onClick={this.toggleEditMode}> {this.props.status} </span> }
        </>
    }
}

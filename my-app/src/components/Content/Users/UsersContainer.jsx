import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    getUsers
} from "../../../store/usersPageReducer";
import Preload from "../../common/Preload/Preload";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.stateUsersPage.selectedPage, this.props.stateUsersPage.pageSize)
    }

    render() {
        return <div>
            {this.props.stateUsersPage.isFetching ? <Preload/> : null}
            <Users usersData={this.props.stateUsersPage.usersData}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isDisabled={this.props.stateUsersPage.isDisabled}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        stateUsersPage: state.usersPage
    }
};

export default connect(mapStateToProps, {
    follow, unfollow, getUsers
})(UsersContainer);


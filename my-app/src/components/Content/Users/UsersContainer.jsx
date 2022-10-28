import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setSelectedPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleIsDisabled
} from "../../../store/usersPageReducer";
import css from "./Users.module.css";
import Preload from "../../common/Preload/Preload";
import {usersAPI} from "../../../DAL/api";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.stateUsersPage.selectedPage, this.props.stateUsersPage.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    follow = (userId) => {
        this.props.toggleIsFetching(true);
        this.props.toggleIsDisabled(true, userId);
        usersAPI.follow(userId).then(response => {
            this.props.toggleIsFetching(false);
            this.props.toggleIsDisabled(false, userId);
            if (response.data.resultCode === 0) {
                this.props.follow(userId);
            }
        });
    }

    unfollow = (userId) => {
        this.props.toggleIsFetching(true);
        this.props.toggleIsDisabled(true, userId);
        usersAPI.unfollow(userId).then(response => {
            this.props.toggleIsFetching(false);
            this.props.toggleIsDisabled(false, userId);
            if (response.data.resultCode === 0) {
                this.props.unfollow(userId);
            }
        });
    }

    render() {
        return <div>
            {this.props.stateUsersPage.isFetching ? <Preload/> : null}
            <Users usersData={this.props.stateUsersPage.usersData}
                   follow={this.follow}
                   unfollow={this.unfollow}
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
    follow, unfollow, setUsers, setTotalUsersCount, setSelectedPage, toggleIsFetching, toggleIsDisabled,
})(UsersContainer);


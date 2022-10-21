import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    followingActionCreator, setSelectedPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowingActionCreator
} from "../../../store/usersPageReducer";
import axios from "axios";
import css from "./Users.module.css";



class UsersApiContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.stateUsersPage.pageSize}&page=${this.props.stateUsersPage.selectedPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange(selectedPage) {
        this.props.setSelectedPage(selectedPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    pagination() {
        let countPage = [];
        let maxCountPage = this.props.stateUsersPage.totalUsersCount / this.props.stateUsersPage.pageSize;
        maxCountPage = Math.ceil(maxCountPage);

        if (this.props.stateUsersPage.selectedPage >= maxCountPage - 3) {
            for (let i = 5; i > 1; i--) {
                countPage.push((maxCountPage - i))
            }
        } else if (this.props.stateUsersPage.selectedPage > 3) {
            countPage = [
                this.props.stateUsersPage.selectedPage - 2,
                this.props.stateUsersPage.selectedPage - 1,
                this.props.stateUsersPage.selectedPage,
                this.props.stateUsersPage.selectedPage + 1,
                this.props.stateUsersPage.selectedPage + 2
            ]
        } else {
            for (let i = 1; i < 6; i++) {
                countPage.push(i)
            }
        }
        countPage.push(maxCountPage);

        return countPage.map(count => <span
            className={this.props.stateUsersPage.selectedPage === count && css.selectedPage}
            onClick={() => {this.onPageChange(count)}}> {count} </span>)
    }

    render() {
        return <div>
            <Users pagination={this.pagination()} follow={this.props.follow} unfollow={this.props.unfollow} usersData={this.props.stateUsersPage.usersData}/>
        </div>
            }
};

let mapStateToProps = (state) => {
    return {
        stateUsersPage: state.usersPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followingActionCreator(id)),
        unfollow: (id) => dispatch(unfollowingActionCreator(id)),
        setUsers: (users) => dispatch(setUsersActionCreator(users)),
        setTotalUsersCount: (totalUsersCount) => dispatch(setTotalUsersCountActionCreator(totalUsersCount)),
        setSelectedPage: (selectedPage) => dispatch(setSelectedPageActionCreator(selectedPage))
    }
};

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);


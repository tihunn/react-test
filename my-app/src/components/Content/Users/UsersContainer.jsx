import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setSelectedPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
} from "../../../store/usersPageReducer";
import axios from "axios";
import css from "./Users.module.css";
import Preload from "../../common/Preload/Preload";


class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.stateUsersPage.pageSize}&page=${this.props.stateUsersPage.selectedPage}`,
            {withCredentials: true}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    follow = (userId) => {
        this.props.toggleIsFetching(true);
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {"API-KEY": "8d5a188f-d975-4b0c-8986-ccb6a4319e52"}
        }).then(response => {
            this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {this.props.follow(userId);}
        });
    }

    unfollow = (userId) => {
        this.props.toggleIsFetching(true);
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {"API-KEY": "8d5a188f-d975-4b0c-8986-ccb6a4319e52"}
        }).then(response => {
            this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {this.props.unfollow(userId);};
        });
    }

    onPageChange = (selectedPage) => {
        this.props.setSelectedPage(selectedPage)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selectedPage}`,
        {withCredentials: true}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    pagination = () => {
        let countPage = [];
        let maxCountPage = this.props.stateUsersPage.totalUsersCount / this.props.stateUsersPage.pageSize;
        maxCountPage = Math.ceil(maxCountPage);

        if (this.props.stateUsersPage.selectedPage >= maxCountPage - 3) {
            for (let i = 4; i > 0; i--) {
                countPage.push((maxCountPage - i))
            }
        } else if (this.props.stateUsersPage.selectedPage > 3) {
            countPage = [this.props.stateUsersPage.selectedPage - 2, this.props.stateUsersPage.selectedPage - 1, this.props.stateUsersPage.selectedPage, this.props.stateUsersPage.selectedPage + 1, this.props.stateUsersPage.selectedPage + 2]
        } else {
            for (let i = 1; i < 6; i++) {
                countPage.push(i)
            }
        }
        countPage.push(maxCountPage);

        return countPage.map(count => <span
            className={this.props.stateUsersPage.selectedPage === count && css.selectedPage}
            onClick={() => {
                this.onPageChange(count)
            }}> {count} </span>)
    }

    render() {
        return <div>
            {this.props.stateUsersPage.isFetching ? <Preload/> : null}
            <Users pagination={this.pagination()} follow={this.follow} unfollow={this.unfollow}
                   usersData={this.props.stateUsersPage.usersData}/>
        </div>
    }
};

let mapStateToProps = (state) => {
    return {
        stateUsersPage: state.usersPage
    }
};

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setTotalUsersCount, setSelectedPage, toggleIsFetching,
})(UsersContainer);


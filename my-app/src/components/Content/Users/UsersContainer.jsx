import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow, setSelectedPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow
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
        usersAPI.follow(userId).then(response => {
            this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {
                this.props.follow(userId);
            }
        });
    }

    unfollow = (userId) => {
        this.props.toggleIsFetching(true);
        usersAPI.unfollow(userId).then(response => {
            this.props.toggleIsFetching(false);
            if (response.data.resultCode === 0) {
                this.props.unfollow(userId);
            }
            ;
        });
    }

    onPageChange = (selectedPage) => {
        this.props.setSelectedPage(selectedPage)
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(selectedPage).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }

    pagination = () => {
        let countPage = [1];
        let maxCountPage = this.props.stateUsersPage.totalUsersCount / this.props.stateUsersPage.pageSize;
        maxCountPage = Math.ceil(maxCountPage);

        if (this.props.stateUsersPage.selectedPage >= maxCountPage - 3) {
            for (let i = 5; i > 0; i--) {
                countPage.push((maxCountPage - i))
            }
        } else if (this.props.stateUsersPage.selectedPage > 3) {
            countPage = [1,
                this.props.stateUsersPage.selectedPage - 2,
                this.props.stateUsersPage.selectedPage - 1,
                this.props.stateUsersPage.selectedPage,
                this.props.stateUsersPage.selectedPage + 1,
                this.props.stateUsersPage.selectedPage + 2]
        } else {
            for (let i = 2; i < 7; i++) {
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


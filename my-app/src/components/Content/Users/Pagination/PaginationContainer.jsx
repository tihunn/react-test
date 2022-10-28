import React from "react";
import {connect} from "react-redux";
import {
     setSelectedPage, setTotalUsersCount, setUsers, toggleIsFetching,
} from "../../../../store/usersPageReducer";
import {usersAPI} from "../../../../DAL/api";
import Pagination from "./Pagination";


class PaginationContainer extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return <div>
            <Pagination totalUsersCount={this.props.stateUsersPage.totalUsersCount}
                        pageSize={this.props.stateUsersPage.pageSize}
                        selectedPage={this.props.stateUsersPage.selectedPage}
                        onPageChange={this.onPageChange}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        stateUsersPage: state.usersPage
    }
};

export default connect(mapStateToProps, {
     setUsers, setTotalUsersCount, setSelectedPage, toggleIsFetching,
})(PaginationContainer);


import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
} from "../../../../store/usersPageReducer";
import Pagination from "./Pagination";


class PaginationContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Pagination totalUsersCount={this.props.stateUsersPage.totalUsersCount}
                        pageSize={this.props.stateUsersPage.pageSize}
                        selectedPage={this.props.stateUsersPage.selectedPage}
                        getUsers={this.props.getUsers}
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
    getUsers
})(PaginationContainer);


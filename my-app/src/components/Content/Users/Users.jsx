import React from "react";
import User from "./User/User";
import PaginationContainer from "./Pagination/PaginationContainer";


export default class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    elementUser = () => this.props.usersData.map(user => {
        return <User key={user.id}
                     id={user.id}
                     name={user.name}
                     ava={user.photos.small}
                     followed={user.followed}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     isDisabled={this.props.isDisabled}
        />

    });

    render() {
        return <div>
            <PaginationContainer/>
            {this.elementUser()}
        </div>
    }
};

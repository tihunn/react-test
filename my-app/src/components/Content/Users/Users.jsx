import React from "react";
import User from "./User/User";
import axios from "axios";


export default class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    

    elementUser = () => this.props.stateUsersPage.usersData.map(user => <User key={user.id}
                                                                              id={user.id}
                                                                              firstName={user.name}
                                                                              ava={user.photos.small}
                                                                              followed={user.followed}
                                                                              follow={this.props.follow}
                                                                              unfollow={this.props.unfollow}
    />);

    render() {
        return <div>

            {this.elementUser()}
        </div>
    }
};


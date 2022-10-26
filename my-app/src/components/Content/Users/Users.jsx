import React from "react";
import User from "./User/User";
import css from "./Users.module.css";


export default class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    elementUser = () => this.props.usersData.map(user => {
        debugger;
        return <User key={user.id}
              id={user.id}
              name={user.name}
              ava={user.photos.small}
              followed={user.followed}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
        />

    });

    render() {
        return <div>
            {this.props.pagination}
            {this.elementUser()}
        </div>
    }
};

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUsers } from "../actions/usersActions";
import Moment from "react-moment";

class Users extends Component {
  state = {
    show: "all"
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  usersToDisplay = e => {
    e.preventDefault();
    this.setState({ show: e.target.value });
  };

  render() {
    const { usersLoading } = this.props.users;

    const users =
      this.state.show === "all"
        ? this.props.users.users
        : this.props.users.users.filter(user =>
            user.roles.includes(this.state.show)
          );

    let usersList;

    if (usersLoading || users === null) {
      usersList = <h1>Loading...</h1>;
    } else {
      if (users.length > 0) {
        usersList = (
          <>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Roles</th>
                  <th>Member Since</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.roles}</td>
                    <td>
                      <Moment format="DD MMM YYYY">{user.createdOn}</Moment>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        );
      } else {
        usersList = <h1>No Users Found...</h1>;
      }
    }

    return (
      <div className="users">
        <h2>Users</h2>
        <select
          name="filterUsers"
          id="filterUsers"
          onInput={this.usersToDisplay}
          defaultValue="all"
        >
          <option value="all">All</option>
          <option value="subscriber">Subscribers</option>
          <option value="visitor">Visitors</option>
          <option value="guest">Guests</option>
        </select>
        <div>{usersList}</div>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { fetchUsers })(Users);

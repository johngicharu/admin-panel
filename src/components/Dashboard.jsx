import React from "react";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="summary">
          <div className="card">Subscribers</div>
          <div className="card">Visitors</div>
          <div className="card">Users</div>
          <div className="card">Posts</div>
        </div>
        <h2>Things to Display</h2>
        <ul>
          <li>
            Users
            <ul>
              <li>Subscribed, admin, guest, visitors</li>
              <li>Send them emails (collective)</li>
              <li>Send them emails (specific as replies)</li>
            </ul>
          </li>
          <li>Messages</li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;

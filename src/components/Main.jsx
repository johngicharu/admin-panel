import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Nav from "./Nav";
import Users from "./Users";
import { Route, Switch } from "react-router-dom";
import Mail from "./mail/Mail";
import Dashboard from "./Dashboard";

class Main extends React.Component {
  state = {
    menuActive: false
  };

  handleMenuItemClick = e => {
    e.preventDefault();
    this.setState({ menuActive: !this.state.menuActive });
  };

  render() {
    return (
      <div className="main">
        <Nav
          handleMenuItemClick={this.handleMenuItemClick}
          menuActive={this.state.menuActive}
        />
        <main className={`content ${this.state.menuActive && "menu-open"}`}>
          <header className="top-bar">
            <div className="brand">{this.props.auth.user.username}</div>
            <a href="#!">Logout</a>
          </header>
          <section>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/users" exact component={Users} />
              <Route path="/mail" exact component={Mail} />
            </Switch>
          </section>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Main);

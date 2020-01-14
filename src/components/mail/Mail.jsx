import React from "react";
import "../../css/Mail.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmails } from "../../actions/mailActions";
import { fetchUsers } from "../../actions/usersActions";
import SendMail from "./SendMail";
import ManageTemplates from "./ManageTemplates";

class Mail extends React.Component {
  state = {
    mailAction: "selectAction"
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { mailAction } = this.state;

    return (
      <div className="mail">
        <div className="mailActions">
          <div className="form-control">
            <label htmlFor="mailAction">Select Action: </label>
            <select
              name="mailAction"
              id="mailAction"
              defaultValue={mailAction}
              onInput={this.handleChange}
            >
              <option value="selectAction">Select Action</option>
              <option value="sendMail">Send Mail</option>
              <option value="manageTemplates">Manage Templates</option>
            </select>
          </div>
        </div>
        {mailAction === "sendMail" ? (
          <SendMail />
        ) : mailAction === "manageTemplates" ? (
          <ManageTemplates />
        ) : (
          <p>Select Action to Continue</p>
        )}
      </div>
    );
  }
}

Mail.propTypes = {
  auth: PropTypes.object.isRequired,
  mail: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  mail: state.mail,
  users: state.users
});

export default connect(mapStateToProps, { sendEmails, fetchUsers })(Mail);

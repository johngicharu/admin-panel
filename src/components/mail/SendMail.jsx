import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { sendEmails } from "../../actions/mailActions";
import { fetchUsers } from "../../actions/usersActions";

class SendMail extends React.Component {
  state = {
    mailTo: "none",
    template: "default",
    subject: "",
    message: "",
    specificEmails: ""
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendMail = e => {
    e.preventDefault();
    const { mailTo, specificEmails, template, subject, message } = this.state;

    let userEmails = [];

    if (specificEmails.trim() !== "") {
      specificEmails.split(",").forEach(email => {
        userEmails.push({
          email: email.trim(),
          locals: {
            message
          }
        });
        return;
      });
    }
    if (mailTo !== "none") {
      this.props.users.users
        .filter(user => user.roles.includes(mailTo))
        .forEach(user => {
          const emailRecipient = {
            email: user.email,
            locals: {
              message
            }
          };
          userEmails.push(emailRecipient);
          return;
        });
    }

    console.log(userEmails);

    this.props.sendEmails({
      subject: subject,
      recipients: userEmails,
      template: template,
      locals: {
        message: message
      }
    });
  };
  render() {
    const { mailTo, template, specificEmails, subject, message } = this.state;

    return (
      <div className="sendMail">
        <h2>Send Mail</h2>
        <form onSubmit={this.sendMail}>
          <div className="form-group">
            <div className="form-control">
              <label htmlFor="mailTo">Site Users:</label>
              <select
                name="mailTo"
                id="mailTo"
                defaultValue={mailTo}
                onInput={this.handleChange}
              >
                <option value="none">None</option>
                <option value="subscriber">Subscribers</option>
                <option value="visitor">Visitors</option>
                <option value="guest">Guests</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="specificEmails">Specific Emails:</label>
              <input
                type="text"
                name="specificEmails"
                id="specificEmails"
                placeholder="Comma separated list of emails"
                value={specificEmails}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="template">Template:</label>
              <select
                name="template"
                id="template"
                defaultValue={template}
                onInput={this.handleChange}
              >
                <option value="default">Default</option>
                <option value="subscription">Subscription</option>
                <option value="unsubscribe">Unsubscribe</option>
              </select>
            </div>
          </div>
          <h3>Email</h3>
          <div className="form-control">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              name="message"
              id="message"
              value={message}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Send Emails</button>
        </form>
      </div>
    );
  }
}

SendMail.propTypes = {
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { sendEmails, fetchUsers })(SendMail);

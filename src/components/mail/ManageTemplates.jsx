import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchTemplates,
  createTemplate,
  updateTemplates,
  deleteTemplates
} from "../../actions/mailTemplatesActions";
import Moment from "react-moment";
import AddTemplate from "./AddTemplate";

class ManageTemplates extends React.Component {
  state = {
    editing: false,
    selectedTemplates: []
  };

  componentDidMount() {
    this.props.fetchTemplates();
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createTemplate = e => {
    e.preventDefault();
    this.setState({ editing: !this.state.editing });
  };

  handleSelect = e => {
    if (e.target.checked) {
      this.setState({
        selectedTemplates: [
          ...this.state.selectedTemplates,
          e.target.dataset.id
        ]
      });
    } else {
      this.setState({
        selectedTemplates: this.state.selectedTemplates.filter(
          id => id !== e.target.dataset.id
        )
      });
    }
  };

  render() {
    const {
      mailTemplates: { mailTemplatesList }
    } = this.props;
    const { selectedTemplates, editing } = this.state;

    return (
      <div className="manageTemplates">
        <h3>Manage Templates</h3>
        {editing ? (
          <>
            <button
              className="primary"
              style={{ color: "white" }}
              onClick={this.createTemplate}
            >
              Cancel
            </button>
            <AddTemplate />
          </>
        ) : (
          <>
            <button
              className="primary"
              style={{ color: "white" }}
              onClick={this.createTemplate}
            >
              Create Template
            </button>
            {mailTemplatesList.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Variables</th>
                    <th>Last Modified</th>
                    <th></th>
                    <th>
                      {selectedTemplates.length > 0 ? (
                        <a href="#!" className="btn danger">
                          Delete All
                        </a>
                      ) : null}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mailTemplatesList.map((template, index) => (
                    <tr key={template.id}>
                      <td>
                        <input
                          type="checkbox"
                          name="selectTemplate"
                          data-id={template.id}
                          onClick={this.handleSelect}
                        />
                      </td>
                      <td>{index + 1}</td>
                      <td>{template.title}</td>
                      <td>{template.templateVars}</td>
                      <td>
                        {template.modifiedOn ? (
                          <Moment format="DD MMM YYYY">
                            {template.modifiedOn}
                          </Moment>
                        ) : (
                          <Moment format="DD MMM YYYY">
                            {template.createdOn}
                          </Moment>
                        )}
                      </td>
                      <td>
                        <a
                          href="#!"
                          className="btn primary"
                          data-id={template.id}
                        >
                          Edit
                        </a>
                      </td>
                      <td>
                        <a
                          href="#!"
                          className="btn danger"
                          data-id={template.id}
                        >
                          <i className="icon-trash"></i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>There are no remplates to display</p>
            )}
          </>
        )}
      </div>
    );
  }
}

ManageTemplates.propTypes = {
  mailTemplates: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  mailTemplates: state.mailTemplates
});

export default connect(mapStateToProps, {
  fetchTemplates,
  createTemplate,
  updateTemplates,
  deleteTemplates
})(ManageTemplates);

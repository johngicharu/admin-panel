import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class AddTemplate extends React.Component {
  state = {
    newTemplate: ""
  };

  handleChange = value => {
    this.setState({ newTemplate: value });
  };

  render() {
    return (
      <div className="addTemplate">
        <form>
          <div className="form-control">
            <label htmlFor="templateTitle">Name</label>
            <input
              type="text"
              name="templateTitle"
              id="templateTitle"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="template">Template</label>

            <ReactQuill
              id="template"
              value={this.state.newTemplate}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit">Add Template</button>
        </form>
      </div>
    );
  }
}

export default AddTemplate;

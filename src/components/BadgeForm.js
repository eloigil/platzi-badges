import React from "react";

class BadgeForm extends React.Component {
  handleChange = e => {
    console.log({
      name: e.target.name,
      value: e.target.value
    });
  };

  handleClick = e => {
    console.log("click");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submited");
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit} action="">
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="firstName"
            />
          </div>

          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;

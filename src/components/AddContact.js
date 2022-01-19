import React, { Component } from "react";

class Addcontact extends Component {
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="name" />
          </div>
          <div className="field">
            <label>Mobile Number</label>
            <input type="number" name="number" placeholder="Mobile Number" />
          </div>

          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <button className="ui button blue ">Add</button>
        </form>
      </div>
    );
  }
}

export default Addcontact;

import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to the Contact page of the Student Management Portal"
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default Contact;

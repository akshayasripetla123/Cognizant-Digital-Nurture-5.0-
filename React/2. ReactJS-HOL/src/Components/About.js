import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to the About page of the Student Management Portal"
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

export default About;

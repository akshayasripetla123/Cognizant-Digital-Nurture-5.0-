import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Welcome to the Home page of Student Management Portal"
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

export default Home;

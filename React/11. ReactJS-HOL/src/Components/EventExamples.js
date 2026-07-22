import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      helloMessage: '',
      clickMessage: ''
    };

    // Binding "this" in the constructor so the handlers can correctly
    // reference the component instance when invoked from JSX
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  // Increments the counter value
  handleIncrement() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    // The Increment button invokes a second method as well
    this.sayHello();
  }

  // Decrements the counter value
  handleDecrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  // Displays a static "Hello" message - the second method
  // invoked by the Increment button
  sayHello() {
    this.setState({ helloMessage: 'Hello! Counter has been updated.' });
  }

  // Invoked by the "Say Welcome" button, takes an argument
  sayWelcome(message) {
    alert(message);
  }

  // Handles a synthetic "onClick" (React's cross-browser SyntheticEvent
  // wrapper around the native browser event) and displays a message
  handlePress(event) {
    // event here is a React SyntheticEvent, not the raw DOM event
    this.setState({ clickMessage: 'I was clicked' });
    console.log('Synthetic event type:', event.type);
  }

  render() {
    return (
      <div className="section">
        <h2>Event Handling Examples</h2>

        <div className="counter-block">
          <h3>Counter: {this.state.counter}</h3>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          {this.state.helloMessage && <p className="hello-msg">{this.state.helloMessage}</p>}
        </div>

        <div className="welcome-block">
          <h3>Say Welcome</h3>
          {/* Passing an argument to the event handler using an arrow function */}
          <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
        </div>

        <div className="press-block">
          <h3>Synthetic Event</h3>
          <button onClick={this.handlePress}>OnPress</button>
          {this.state.clickMessage && <p className="click-msg">{this.state.clickMessage}</p>}
        </div>
      </div>
    );
  }
}

export default EventExamples;

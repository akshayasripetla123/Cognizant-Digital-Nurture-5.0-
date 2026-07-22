import React, { Component } from 'react';

// Approximate conversion rate: 1 INR = 0.011 EUR
const INR_TO_EUR_RATE = 0.011;

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Updates state as the user types into the Rupees input field
  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  // Handles the Click event of the "Convert" button.
  // Converts the entered Indian Rupees value into Euros.
  handleSubmit(event) {
    event.preventDefault();
    const rupeeValue = parseFloat(this.state.rupees) || 0;
    const euroValue = (rupeeValue * INR_TO_EUR_RATE).toFixed(2);
    this.setState({ euros: euroValue });
  }

  render() {
    return (
      <div className="section">
        <h2>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="rupees">Indian Rupees (₹):</label>{' '}
          <input
            type="number"
            id="rupees"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in INR"
          />{' '}
          <button type="submit">Convert</button>
        </form>

        {this.state.euros !== null && (
          <p className="result">
            &#8377;{this.state.rupees} = &euro;{this.state.euros}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;

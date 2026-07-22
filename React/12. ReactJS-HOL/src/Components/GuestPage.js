import React from 'react';
import flights from './Flights';

function GuestPage() {
  return (
    <div className="page guest-page">
      <h2>Welcome, Guest!</h2>
      <p className="info-msg">
        You are browsing as a guest. Please <strong>log in</strong> to book tickets.
      </p>

      <table className="flight-table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.airline}</td>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.time}</td>
              <td>&#8377;{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GuestPage;

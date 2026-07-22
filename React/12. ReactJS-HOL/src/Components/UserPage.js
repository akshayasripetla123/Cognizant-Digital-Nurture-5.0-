import React, { useState } from 'react';
import flights from './Flights';
import BookingConfirmation from './BookingConfirmation';

function UserPage() {
  const [bookedFlight, setBookedFlight] = useState(null);

  const handleBook = (flight) => {
    setBookedFlight(flight);
  };

  return (
    <div className="page user-page">
      <h2>Welcome, User!</h2>
      <p className="info-msg">You are logged in. You can book any of the flights below.</p>

      <table className="flight-table">
        <thead>
          <tr>
            <th>Airline</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Price</th>
            <th>Action</th>
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
              <td>
                {/* Conditional rendering with a ternary: show "Booked"
                    label instead of the button once this flight is booked */}
                {bookedFlight && bookedFlight.id === flight.id ? (
                  <span className="booked-label">Booked</span>
                ) : (
                  <button onClick={() => handleBook(flight)}>Book Now</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* BookingConfirmation renders null (nothing) until a flight is booked */}
      <BookingConfirmation bookedFlight={bookedFlight} />
    </div>
  );
}

export default UserPage;

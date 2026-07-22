import React from 'react';

// Demonstrates how to prevent a component from rendering:
// if there is no booked flight yet, the component returns null
// and nothing is rendered to the DOM.
function BookingConfirmation({ bookedFlight }) {
  if (!bookedFlight) {
    return null;
  }

  return (
    <div className="booking-confirmation">
      <h3>Booking Confirmed!</h3>
      <p>
        Your ticket on <strong>{bookedFlight.airline}</strong> from{' '}
        <strong>{bookedFlight.from}</strong> to <strong>{bookedFlight.to}</strong>{' '}
        at {bookedFlight.time} has been booked for &#8377;{bookedFlight.price}.
      </p>
    </div>
  );
}

export default BookingConfirmation;

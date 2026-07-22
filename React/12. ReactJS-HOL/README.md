# Ticket Booking App - Conditional Rendering Lab

A React hands-on lab demonstrating **conditional rendering**, **element
variables**, and **preventing components from rendering**.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `ticketbookingapp` folder in Visual Studio Code (or open a
   terminal in that folder).
3. Install dependencies:
   ```
   npm install
   ```
4. Start the app:
   ```
   npm start
   ```
5. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Project structure

```
ticketbookingapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── Flights.js               # Shared flight data
│   │   ├── GuestPage.js              # Guest view (browse only)
│   │   ├── UserPage.js               # Logged-in user view (can book)
│   │   └── BookingConfirmation.js    # Returns null until a flight is booked
│   ├── App.js                         # Login/Logout + conditional rendering
│   ├── App.css                        # Styling
│   └── index.js                        # App entry point
└── package.json
```

## How it works

### Element variables + conditional rendering (App.js)
`App.js` keeps an `isLoggedIn` state flag. Two **element variables**,
`button` and `page`, are assigned JSX using a simple `if`/`else`:

```jsx
let button;
if (isLoggedIn) {
  button = <button onClick={handleLogout}>Logout</button>;
} else {
  button = <button onClick={handleLogin}>Login</button>;
}

let page;
if (isLoggedIn) {
  page = <UserPage />;
} else {
  page = <GuestPage />;
}
```

These variables are then rendered with `{button}` and `{page}`.

- **Guest (not logged in):** the **Guest Page** is shown — flight details
  are visible, but there's no way to book. A **Login** button is shown.
- **Logged in:** the **User Page** is shown — the same flights are
  listed, but each row has a **Book Now** button. A **Logout** button
  is shown instead.
- Clicking **Login** sets `isLoggedIn = true` and switches to the User
  page. Clicking **Logout** sets it back to `false` and switches back to
  the Guest page.

### Preventing a component from rendering (BookingConfirmation.js)
`BookingConfirmation` demonstrates how a component can choose **not** to
render anything:

```jsx
if (!bookedFlight) {
  return null;
}
```

On the User page, this component is always included in the JSX tree, but
it renders **nothing** until the user books a flight — at which point it
returns the confirmation markup instead of `null`.

### Additional conditional rendering (UserPage.js)
Inside the flight table, a ternary operator conditionally shows either a
**"Book Now"** button or a **"Booked"** label per row, depending on
whether that flight has already been booked:

```jsx
{bookedFlight && bookedFlight.id === flight.id ? (
  <span className="booked-label">Booked</span>
) : (
  <button onClick={() => handleBook(flight)}>Book Now</button>
)}
```

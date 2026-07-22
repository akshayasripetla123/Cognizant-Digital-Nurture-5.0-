# Event Examples App - React Event Handling Lab

A React hands-on lab demonstrating **event handling**, the **`this`**
keyword, and **Synthetic Events**.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `eventexamplesapp` folder in Visual Studio Code (or open a
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
eventexamplesapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── EventExamples.js       # Counter, Say Welcome, Synthetic event
│   │   └── CurrencyConvertor.js   # INR to Euro conversion on click
│   ├── App.js                      # Renders both components
│   ├── App.css                     # Styling
│   └── index.js                     # App entry point
└── package.json
```

## EventExamples.js

1. **Increment / Decrement buttons**
   - **Increment** calls `handleIncrement()`, which invokes **two methods**:
     a. `setState(...)` to increase the counter value.
     b. `sayHello()` to display a static "Hello" message.
   - **Decrement** calls `handleDecrement()` to decrease the counter.
   - All handler methods are bound to the component instance in the
     `constructor` using `.bind(this)`, so `this.setState` works correctly
     when the methods are invoked as event handlers.

2. **Say Welcome button**
   - Invokes `sayWelcome(message)`, which takes an argument. The argument
     is passed using an inline arrow function in JSX:
     ```jsx
     <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
     ```

3. **OnPress button (Synthetic Event)**
   - `onClick={this.handlePress}` — React wraps the native browser click
     event in a cross-browser **SyntheticEvent** object, passed as the
     `event` parameter. `handlePress(event)` reads `event.type` and
     displays "I was clicked" on the page.

## CurrencyConvertor.js

- A form with an **Indian Rupees** input field and a **Convert** button.
- Clicking **Convert** triggers the form's `onSubmit`, which calls
  `handleSubmit(event)`:
  - `event.preventDefault()` stops the default form submission/page reload.
  - It converts the entered rupee value to Euros using an approximate
    conversion rate (`1 INR = 0.011 EUR`) and displays the result.

## Note

`alert()` is used for the "Say Welcome" button, so your browser will show
a native pop-up alert dialog with the word **"welcome"** when that button
is clicked.

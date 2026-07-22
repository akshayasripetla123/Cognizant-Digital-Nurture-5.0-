# Cricket App - ES6 Features Lab

A React hands-on lab demonstrating ES6 features: `map()`, `filter()`,
arrow functions, destructuring, and array merging (spread operator).

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `cricketapp` folder in Visual Studio Code (or open a terminal
   in that folder).
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
cricketapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── ListofPlayers.js     # map() + filter() with arrow functions
│   │   └── IndianPlayers.js     # Destructuring + array merge (spread)
│   ├── App.js                    # flag variable + if-else switching
│   ├── App.css                   # Styling
│   └── index.js                  # App entry point
└── package.json
```

## Components

### 1. ListofPlayers
- Declares an array of **11 players** with `name` and `score`, rendered
  using the ES6 **`map()`** method.
- Filters players with a **score below 70** using **`filter()`** combined
  with an ES6 **arrow function**: `players.filter((player) => player.score < 70)`.

### 2. IndianPlayers
- **(a) Destructuring:** A single array of 11 player names is split into
  **Odd Team Players** and **Even Team Players** using ES6 **array
  destructuring** (alternating positions pulled out into named variables).
- **(b) Merge:** Two separate arrays, `T20Players` and `RanjiTrophyPlayers`,
  are combined into one using the ES6 **spread operator**:
  `[...T20Players, ...RanjiTrophyPlayers]`.

## Flag-based switching (App.js)

`App.js` defines a `flag` state variable and uses a **simple if-else**
to decide which component to render on the home page:

```js
let content;
if (flag) {
  content = <ListofPlayers />;
} else {
  content = <IndianPlayers />;
}
```

- **When `flag = true`** → the **ListofPlayers** component is displayed
  (all 11 players + players scoring below 70).
- **When `flag = false`** → the **IndianPlayers** component is displayed
  (Odd/Even team players via destructuring, plus the merged T20 + Ranji
  Trophy players list).

A **"Toggle Flag"** button is included in the UI so you can switch between
`true` and `false` live in the browser without editing code, to see both
outputs described in the lab.

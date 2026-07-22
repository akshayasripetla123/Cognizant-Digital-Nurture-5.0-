# Student Management Portal - Score Calculator App

A React hands-on lab project demonstrating function components.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `scorecalculatorapp` folder in Visual Studio Code (or open a terminal in that folder).
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
scorecalculatorapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   └── CalculateScore.js   # Function component
│   ├── Stylesheets/
│   │   └── mystyle.css         # Component styling
│   ├── App.js                  # Invokes CalculateScore
│   └── index.js                # App entry point
└── package.json
```

## What CalculateScore does

`CalculateScore` is a **function component** that accepts four props:
- `Name` – student's name
- `School` – student's school
- `Total` – total marks scored
- `goal` – number of subjects

It calculates the average score (`Total / goal`) and renders it in a styled card.

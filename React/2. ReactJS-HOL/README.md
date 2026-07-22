# StudentApp - Student Management Portal

This project contains three class components (Home, About, Contact) rendered inside App.js,
as described in the "React Components" hands-on lab.

## How to run

1. Extract this zip file.
2. Open a terminal / VS Code terminal in the `StudentApp` folder.
3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser at `http://localhost:3000`.

## Project structure

```
StudentApp/
├── package.json
├── public/
│   └── index.html
└── src/
    ├── index.js
    ├── App.js
    └── Components/
        ├── Home.js
        ├── About.js
        └── Contact.js
```

## Notes

- `Home.js`, `About.js`, and `Contact.js` are class components. Each defines a
  `constructor(props)` that calls `super(props)` and initializes `this.state`
  with a welcome message, and a `render()` method that returns the JSX to display
  that message.
- `App.js` imports and calls (renders) all three components together.
- `node_modules` is not included in this zip — run `npm install` first to fetch
  React, ReactDOM, and react-scripts before starting the app.

# Blog App - React Component Life Cycle Lab

A React hands-on lab demonstrating class component lifecycle hooks:
`componentDidMount()` and `componentDidCatch()`.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `blogapp` folder in Visual Studio Code (or open a terminal in that folder).
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
blogapp/
├── public/
│   └── index.html
├── src/
│   ├── Post.js       # Post model class
│   ├── Posts.js       # Class component with lifecycle hooks
│   ├── App.js          # Renders Posts component
│   ├── App.css        # Styling
│   └── index.js        # App entry point
└── package.json
```

## What Posts.js does

`Posts` is a **class-based component** that:

1. **constructor(props)** — initializes `state.posts` as an empty array.
2. **loadPosts()** — uses the Fetch API to retrieve posts from
   `https://jsonplaceholder.typicode.com/posts` and stores them in state.
3. **componentDidMount()** — a lifecycle hook invoked right after the component
   is added to the DOM; it calls `loadPosts()` to fetch data.
4. **render()** — displays each post's `title` in an `<h2>` and `body` in a `<p>`.
5. **componentDidCatch(error, info)** — a lifecycle hook that catches errors
   occurring anywhere in the component tree below it, and shows an `alert()`
   message describing the error.

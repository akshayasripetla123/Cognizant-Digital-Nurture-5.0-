# Blogger App - Conditional Rendering & Lists Lab

A React hands-on lab demonstrating **multiple ways of conditional
rendering**, **list components with keys**, and **`map()`** across three
components: `BookDetails`, `BlogDetails`, and `CourseDetails`.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `bloggerapp` folder in Visual Studio Code (or open a terminal
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
bloggerapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── BookDetails.js     # && operator, list + keys
│   │   ├── BlogDetails.js     # ternary operator, element variables
│   │   └── CourseDetails.js   # switch statement, IIFE, return-null
│   ├── App.js                  # renders all 3 components together
│   ├── App.css                 # styling
│   └── index.js                 # app entry point
└── package.json
```

## Ways of conditional rendering demonstrated

| Technique | Where it's used |
|---|---|
| **`&&` (logical AND) operator** | `BookDetails.js` — shows an "On Sale" badge only when `book.onSale` is true; shows an empty-list message only when there are no books |
| **Ternary operator** | `BlogDetails.js` — picks "Published"/"Draft" label and style; shows comment count vs. placeholder |
| **Element variables (if-else)** | `BlogDetails.js` — builds a `summary` JSX variable ahead of time with `if`/`else`, then renders `{summary}` |
| **`switch` statement** | `CourseDetails.js` — `getLevelBadge()` picks a badge class/label per course level (`Beginner` / `Intermediate` / `Advanced`) |
| **IIFE (Immediately Invoked Function Expression) inside JSX** | `CourseDetails.js` — inline `(() => { ... })()` used for multi-branch logic about seat availability, directly inline in JSX |
| **Preventing a component from rendering (`return null`)** | `CourseDetails.js` — `SoldOutNotice` returns `null` whenever seats are still available, and only renders the "Sold Out" label when `seatsLeft === 0` |

## Lists and keys

Each component defines a data array (`books`, `blogs`, `courses`) and
renders it using the **`map()`** function into a **list component**
(`BookItem`, `BlogItem`, `CourseItem`) — components extracted specifically
to keep the list-rendering logic clean. Every rendered item is given a
unique **`key`** prop (`key={book.id}`, `key={blog.id}`, `key={course.id}`)
in the `map()` call, which lets React efficiently identify which items
changed, were added, or were removed when the list re-renders.

## Rendering multiple components

`App.js` renders `BookDetails`, `BlogDetails`, and `CourseDetails` all on
the same page, one after another — demonstrating how multiple independent
React components can be composed together into a single page.

# Cohort Dashboard - React Styling Lab (CSS Modules & Inline Styles)

A React hands-on lab demonstrating component styling using **CSS Modules**
and **inline styles**.

> Note: The original zip attachment referenced in the lab instructions was
> not available, so this project was rebuilt from scratch to match the lab
> requirements and produce the same result.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `cohortapp` folder in Visual Studio Code (or open a terminal in
   that folder).
3. Restore/install dependencies:
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
cohortapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   ├── CohortDetails.js               # Component using the CSS Module
│   │   └── CohortDetails.module.css       # CSS Module
│   ├── App.js                              # Renders a list of CohortDetails
│   └── index.js                            # App entry point
└── package.json
```

## Styling details

### CohortDetails.module.css
- **`.box`** class:
  - `width: 300px`
  - `display: inline-block`
  - `margin: 10px` (all sides)
  - `padding: 10px 20px` (10px top/bottom, 20px left/right)
  - `border: 1px solid black`
  - `border-radius: 10px`
- **`dt`** tag selector:
  - `font-weight: 500`

### CohortDetails.js
- Imports the CSS Module: `import styles from './CohortDetails.module.css'`
- Applies the box styling to the container `<div>` via
  `className={styles.box}`
- Uses an **inline `style`** on the `<h3>` heading to color it:
  - `green` when `status === 'Ongoing'`
  - `blue` for all other statuses (e.g. `Completed`)
- Cohort details (Status, Start Date, End Date, Mentor) are shown using a
  `<dl>`/`<dt>`/`<dd>` definition list, so the `dt` tag-selector styling
  applies automatically.

## Sample data

Four sample cohorts are rendered from `App.js`, two marked `Ongoing`
(green headings) and two marked `Completed` (blue headings), so you can see
both styling states side by side — matching Figure 2 in the lab.

# Office Space Rental App - JSX Lab

A React hands-on lab demonstrating **JSX**: elements, attributes,
JavaScript expressions in JSX, list rendering, and inline CSS.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## How to run

1. Extract this zip file.
2. Open the `officespacerentalapp` folder in Visual Studio Code (or open a
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
officespacerentalapp/
├── public/
│   └── index.html
├── src/
│   ├── Components/
│   │   └── OfficeSpace.js   # JSX elements, attributes, object, list, inline CSS
│   ├── App.js                # Renders OfficeSpace
│   └── index.js               # App entry point (JSX rendered to DOM)
└── package.json
```

## What OfficeSpace.js demonstrates

1. **JSX Element for the heading** — a plain `<h1>` element:
   ```jsx
   <h1>Office Space Rental App</h1>
   ```

2. **JSX Attribute for the image** — the `<img>` tag uses the `src` and
   `alt` attributes, populated dynamically from JavaScript expressions
   inside curly braces `{ }`:
   ```jsx
   <img src={featuredOffice.image} alt={featuredOffice.name} />
   ```

3. **Object to display office details** — a `featuredOffice` object holds
   `name`, `rent`, `address`, and `image`, rendered using JSX expressions:
   ```jsx
   <p><strong>Name:</strong> {featuredOffice.name}</p>
   ```

4. **List of objects looped through JSX** — an `officeList` array of office
   objects is rendered using the `map()` method to generate a card for
   each office space.

5. **Inline CSS in JSX** — the `style` attribute is used with a JS object
   to color the rent text:
   - **Red** if rent is below ₹60,000
   - **Green** if rent is ₹60,000 or above

   ```jsx
   const getRentStyle = (rent) => ({
     color: rent < 60000 ? 'red' : 'green',
     fontWeight: 'bold'
   });
   ```

## Rendering JSX to the DOM

`index.js` uses `ReactDOM.createRoot(...).render(<App />)` to render the
JSX tree (compiled under the hood via `React.createElement()` calls) into
the `#root` DOM node defined in `public/index.html`.

## Note on images

Office images are loaded from `https://picsum.photos` placeholder URLs, so
an internet connection is required to see the images when running the app.

import React from 'react';

const books = [
  { id: 1, title: 'Learning React', author: 'Alex Banks', onSale: true, price: 499 },
  { id: 2, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', onSale: false, price: 799 },
  { id: 3, title: 'You Don\u2019t Know JS', author: 'Kyle Simpson', onSale: true, price: 399 },
  { id: 4, title: 'Clean Code', author: 'Robert C. Martin', onSale: false, price: 899 }
];

// Extracted list-item component. Each item needs a unique "key" prop
// (set where the component is used, in the map() call below) so React
// can efficiently track which items changed, were added, or removed.
function BookItem({ book }) {
  return (
    <li className="list-item">
      <strong>{book.title}</strong> by {book.author} - &#8377;{book.price}
      {/* CONDITIONAL RENDERING with the && (logical AND) operator:
          the "On Sale" badge is only rendered when book.onSale is true */}
      {book.onSale && <span className="badge">On Sale</span>}
    </li>
  );
}

function BookDetails() {
  return (
    <div className="section">
      <h2>Book Details</h2>
      {/* LIST COMPONENT: React.map() function is used to transform the
          books array into a list of JSX elements, each given a unique key */}
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>

      {/* CONDITIONAL RENDERING: && operator used again to show a message
          only when the list is empty (prevents rendering an empty <ul>) */}
      {books.length === 0 && <p>No books available.</p>}
    </div>
  );
}

export default BookDetails;

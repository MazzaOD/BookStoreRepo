import React from 'react';

const BookDetails = ({ book }) => {
  if (!book) return null;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Category: {book.category}</p>
      <p>Price: ${book.price}</p>
      <p>Stock: {book.stock}</p>
    </div>
  );
};

export default BookDetails;

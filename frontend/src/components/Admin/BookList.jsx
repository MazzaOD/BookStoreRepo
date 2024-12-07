import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/books')
      .then((response) => setBooks(response.data))
      .catch((error) => setError(error.response?.data?.message || 'Failed to fetch books'));
  }, []);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Book List</h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="divide-y divide-gray-200">
        {books.map((book) => (
          <li key={book._id} className="py-2 flex justify-between">
            <div>
              <h3 className="font-medium">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-500 font-semibold">${book.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500">Stock: {book.stock}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

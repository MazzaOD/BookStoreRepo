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
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Book List</h2>
      {error && <p className="text-red-500 dark:text-red-400">{error}</p>}
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {books.map((book) => (
          <li key={book._id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{book.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">by {book.author}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-600 dark:text-blue-400 font-medium">${book.price.toFixed(2)}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stock: {book.stock}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

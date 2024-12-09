import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookList = ({ onEdit }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get('http://localhost:5000/api/books')
      .then((response) => setBooks(response.data))
      .catch((error) => setError(error.response?.data?.message || 'Failed to fetch books'));
  };

  const handleDelete = (bookId) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      axios
        .delete(`http://localhost:5000/api/books/${bookId}`)
        .then(() => {
          alert('Book deleted successfully!');
          fetchBooks(); // Refresh the book list
        })
        .catch((error) => {
          console.error('Error deleting book:', error);
        });
    }
  };

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
              <p className="text-sm text-gray-500 dark:text-gray-400">Stock: {book.stock}</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => onEdit(book)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(book._id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;

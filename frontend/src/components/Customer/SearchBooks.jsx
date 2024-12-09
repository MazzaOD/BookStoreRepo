import React, { useState } from 'react';
import axios from 'axios';

const SearchBooks = ({ onAddToCart }) => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('title');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query) return alert('Please enter a search term!');
    try {
      const response = await axios.get(
        `http://localhost:5000/api/books/search?query=${query}&filter=${filter}`
      );
      setResults(response.data);
    } catch (error) {
      alert('Failed to fetch books. Please try again.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Search Books</h2>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded-md shadow-sm"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-md shadow-sm"
        >
          <option value="title">Title</option>
          <option value="category">Genre</option>
          <option value="author">Author</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {results.map((book) => (
          <li key={book._id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">by {book.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Price: ${book.price}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stock: {book.stock}</p>
            </div>
            <button
              onClick={() => onAddToCart(book)}
              className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBooks;

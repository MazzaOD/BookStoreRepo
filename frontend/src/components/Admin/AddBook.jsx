import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    isbn: '',
    author: '',
    category: '',
    price: '',
    stock: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/books', formData).then(() => {
      alert('Book added!');
      setFormData({ title: '', isbn: '', author: '', category: '', price: '', stock: '' });
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Add a Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['title', 'isbn', 'author', 'category', 'price', 'stock'].map((field) => (
          <div key={field}>
            <label className="block text-gray-600 dark:text-gray-400 font-medium capitalize">
              {field}
            </label>
            <input
              name={field}
              placeholder={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;

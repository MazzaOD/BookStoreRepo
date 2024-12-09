import React, { useState } from 'react';
import axios from 'axios';

const EditBook = ({ book, onSave }) => {
  const [formData, setFormData] = useState(book);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/books/${book._id}`, formData)
      .then(() => {
        alert('Book updated successfully!');
        onSave(); // Trigger parent to refresh data or switch pages
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Edit Book</h2>
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
          className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBook;

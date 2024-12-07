import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditBook = ({ book, onSave }) => {
  const [formData, setFormData] = useState(book);

  useEffect(() => {
    setFormData(book);
  }, [book]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/books/${book._id}`, formData).then(() => {
      alert('Book updated!');
      onSave();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Book</h2>
      <input name="title" value={formData.title} onChange={handleChange} />
      <input name="isbn" value={formData.isbn} onChange={handleChange} />
      <input name="author" value={formData.author} onChange={handleChange} />
      <input name="category" value={formData.category} onChange={handleChange} />
      <input name="price" value={formData.price} onChange={handleChange} />
      <input name="stock" value={formData.stock} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditBook;

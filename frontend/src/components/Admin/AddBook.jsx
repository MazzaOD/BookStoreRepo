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
    axios.post('/api/books', formData).then(() => {
      alert('Book added!');
      setFormData({ title: '', isbn: '', author: '', category: '', price: '', stock: '' });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Book</h2>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
      <input name="isbn" placeholder="ISBN" value={formData.isbn} onChange={handleChange} />
      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
      <input name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;

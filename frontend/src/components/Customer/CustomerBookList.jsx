import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerBookList = ({ onAddToCart }) => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/books')
            .then((response) => setBooks(response.data))
            .catch((error) => setError(error.response?.data?.message || 'Failed to fetch books'));
    }, []);

    const [flash, setFlash] = useState(false);

    const handleAddToCart = (book) => {
        onAddToCart(book);
        setFlash(true);
        setTimeout(() => setFlash(false), 500); // Remove flash after animation
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
                            <p className="text-sm text-gray-500 dark:text-gray-400">Genre: {book.category}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Price: ${book.price}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Stock: {book.stock}</p>
                        </div>
                        <button
                            onClick={() => handleAddToCart(book)}
                            className={`bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition ${flash ? 'flash' : ''
                                }`}
                        >
                            Add to Cart
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerBookList;

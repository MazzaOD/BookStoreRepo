import React from 'react';

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <span className="text-yellow-300">Book</span>Store
        </h1>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => setActivePage('addBook')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activePage === 'addBook' ? 'bg-yellow-500 text-gray-900 shadow-md' : 'hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              Add Book
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('bookList')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activePage === 'bookList' ? 'bg-yellow-500 text-gray-900 shadow-md' : 'hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              Book List
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('uploadBooks')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activePage === 'uploadBooks' ? 'bg-yellow-500 text-gray-900 shadow-md' : 'hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              Upload Books
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('searchBooks')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activePage === 'searchBooks' ? 'bg-yellow-500 text-gray-900 shadow-md' : 'hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              Search
            </button>
          </li>
          <li>
            <button
              onClick={() => setActivePage('cart')}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activePage === 'cart' ? 'bg-yellow-500 text-gray-900 shadow-md' : 'hover:bg-yellow-400 hover:text-gray-900'
              }`}
            >
              Cart
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

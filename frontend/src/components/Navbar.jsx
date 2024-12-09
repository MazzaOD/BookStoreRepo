import React from 'react';

const Navbar = ({ activePage, setActivePage, role }) => {
  const adminOptions = [
    { label: 'Add Book', page: 'addBook' },
    { label: 'Book List', page: 'bookList' },
    { label: 'Upload Books', page: 'uploadBooks' },
  ];

  const customerOptions = [
    { label: 'Book List', page: 'bookList' },
    { label: 'Search Books', page: 'searchBooks' },
    { label: 'Cart', page: 'cart' },
  ];

  const options = role === 'admin' ? adminOptions : customerOptions;

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-3xl font-bold">
          <span className="text-yellow-300">Book</span>Store
        </h1>
        <ul className="flex space-x-4">
          {options.map((option) => (
            <li key={option.page}>
              <button
                onClick={() => setActivePage(option.page)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  activePage === option.page
                    ? 'bg-yellow-500 text-gray-900 shadow-md'
                    : 'hover:bg-yellow-400 hover:text-gray-900'
                }`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

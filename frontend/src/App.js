import React from 'react';
import ThemeToggle from './components/ThemeToggle';
import BookList from './components/Admin/BookList';
import AddBook from './components/Admin/AddBook';
import EditBook from './components/Admin/EditBook';
import SearchBooks from './components/Customer/SearchBooks';
import Cart from './components/Customer/Cart';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Bookstore Management</h1>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8">
        {/* Admin Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Admin Panel</h2>
          <div className="bg-white shadow-md rounded p-4">
            <AddBook />
            <BookList />
          </div>
        </section>

        {/* Customer Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Customer Interface</h2>
          <div className="bg-white shadow-md rounded p-4">
            <SearchBooks />
            <Cart />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

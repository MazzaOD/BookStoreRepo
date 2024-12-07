import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddBook from './components/Admin/AddBook';
import EditBook from './components/Admin/EditBook';
import BookList from './components/Admin/BookList';
import UploadBooks from './components/Admin/UploadBooks';
import SearchBooks from './components/Customer/SearchBooks';
import Cart from './components/Customer/Cart';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [activePage, setActivePage] = useState('addBook');
  const [cartItems, setCartItems] = useState([]);
  const [editBook, setEditBook] = useState(null);

  const handleAddToCart = (book) => {
    const existingItem = cartItems.find((item) => item._id === book._id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item._id === book._id
          ? { ...item, quantity: Math.min(item.quantity + 1, 5) }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (bookId) => {
    const updatedCart = cartItems.filter((item) => item._id !== bookId);
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    alert('Checkout successful!');
    setCartItems([]);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'addBook':
        return <AddBook />;
      case 'editBook':
        return <EditBook book={editBook} onSave={() => setActivePage('bookList')} />;
      case 'bookList':
        return <BookList onEdit={(book) => { setEditBook(book); setActivePage('editBook'); }} />;
      case 'uploadBooks':
        return <UploadBooks />;
      case 'searchBooks':
        return <SearchBooks onAddToCart={handleAddToCart} />;
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
        );
      default:
        return <AddBook />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="container mx-auto mt-8 p-4">
        {renderPage()}
        <div className="flex justify-end mt-8">
          <ThemeToggle />
        </div>
      </main>
    </div>
  );
};

export default App;

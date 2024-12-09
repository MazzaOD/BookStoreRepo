import React, { useState } from 'react';
import axios from 'axios';
import RoleSelection from './components/RoleSelection';
import Navbar from './components/Navbar';
import CustomerBookList from './components/Customer/CustomerBookList';
import SearchBooks from './components/Customer/SearchBooks';
import Cart from './components/Customer/Cart';
import AddBook from './components/Admin/AddBook';
import EditBook from './components/Admin/EditBook';
import BookList from './components/Admin/BookList';
import UploadBooks from './components/Admin/UploadBooks';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
  const [role, setRole] = useState(null);
  const [activePage, setActivePage] = useState('bookList');
  const [cartItems, setCartItems] = useState([]);
  const [editBook, setEditBook] = useState(null);

  // Add book to cart
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

  // Remove book from cart
  const handleRemoveFromCart = (bookId) => {
    const updatedCart = cartItems.filter((item) => item._id !== bookId);
    setCartItems(updatedCart);
  };

  // Handle checkout and update stock
  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/books/checkout', {
        cartItems,
      });

      const orderNumber = `ORD-${Date.now()}`;
      alert(`Checkout successful! Your order number is ${orderNumber}.`);

      // Clear the cart after successful checkout
      setCartItems([]);
    } catch (error) {
      alert(
        error.response?.data?.message || 'Checkout failed. Please try again later.'
      );
    }
  };

  // Render pages based on role and active page
  const renderPage = () => {
    if (role === 'admin') {
      switch (activePage) {
        case 'addBook':
          return <AddBook />;
        case 'editBook':
          return <EditBook book={editBook} onSave={() => setActivePage('bookList')} />;
        case 'bookList':
          return (
            <BookList
              onEdit={(book) => {
                setEditBook(book);
                setActivePage('editBook');
              }}
            />
          );
        case 'uploadBooks':
          return <UploadBooks />;
        default:
          return <AddBook />;
      }
    } else if (role === 'customer') {
      switch (activePage) {
        case 'bookList':
          return <CustomerBookList onAddToCart={handleAddToCart} />;
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
          return <CustomerBookList onAddToCart={handleAddToCart} />;
      }
    }
  };

  // Render the role selection page if no role is chosen
  if (!role) {
    return <RoleSelection setRole={setRole} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <Navbar activePage={activePage} setActivePage={setActivePage} role={role} />
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

import React from 'react';

const Cart = ({ cartItems, onCheckout }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Cart</h2>
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {cartItems.map((item) => (
          <li key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium">${(item.quantity * item.price).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={onCheckout}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md shadow hover:bg-blue-700 transition"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;

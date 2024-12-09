import React from 'react';

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>;
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Your Cart</h2>
      <ul className="divide-y divide-gray-300 dark:divide-gray-700">
        {cartItems.map((item) => (
          <li key={item._id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Price: ${item.price}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onRemove(item._id)}
                className="text-red-600 hover:text-red-800 transition"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <button
          onClick={onCheckout}
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

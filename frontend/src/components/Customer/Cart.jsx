import React from 'react';

const Cart = ({ cartItems, onCheckout }) => {
  if (!cartItems || cartItems.length === 0) {
    return <p className="text-gray-500">Your cart is empty.</p>;
  }

  const handleCheckout = () => {
    const valid = cartItems.every((item) => item.quantity <= 5);
    if (!valid) {
      alert('You cannot purchase more than 5 copies of a single book.');
    } else {
      onCheckout();
    }
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Cart</h2>
      <ul className="divide-y divide-gray-200">
        {cartItems.map((item) => (
          <li key={item.id} className="py-2 flex justify-between">
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <p className="text-blue-500 font-semibold">${(item.quantity * item.price).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;

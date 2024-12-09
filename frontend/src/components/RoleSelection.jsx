import React from 'react';

const RoleSelection = ({ setRole }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Welcome to BookStore</h1>
      <p className="text-lg mb-4">Please select your role:</p>
      <div className="space-x-4">
        <button
          onClick={() => setRole('admin')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
        >
          Admin
        </button>
        <button
          onClick={() => setRole('customer')}
          className="bg-green-600 text-white px-6 py-3 rounded-md shadow hover:bg-green-700 transition"
        >
          Customer
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;

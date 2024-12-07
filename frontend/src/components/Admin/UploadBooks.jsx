import React, { useState } from 'react';
import axios from 'axios';

const UploadBooks = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file!');
    const reader = new FileReader();
    reader.onload = async () => {
      const data = JSON.parse(reader.result);
      await axios.post('http://localhost:5000/api/books/upload', data);
      alert('Books uploaded successfully!');
    };
    reader.readAsText(file);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Upload Books</h2>
      <input type="file" accept=".json" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadBooks;

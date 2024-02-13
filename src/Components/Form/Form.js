import React, { useState } from "react";
const BookForm = ({ onSubmit, initialData = {} }) => {
  const [book, setBook] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-8"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title || ""}
            onChange={handleChange}
            className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author || ""}
            onChange={handleChange}
            className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-700"
          >
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={book.genre || ""}
            onChange={handleChange}
            className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookForm;

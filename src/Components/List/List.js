import React from "react";
const books = [
  {
    _id: "1",
    title: "Book Title 1",
    author: "Author Name 1",
    genre: "Genre 1",
  },
  {
    _id: "2",
    title: "Book Title 2",
    author: "Author Name 2",
    genre: "Genre 2",
  },
];
const BookList = () => {
  const handleEdit = (id) => {
    console.log(`Edit book with id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete book with id: ${id}`);
  };
  return (
    <div className="flex justify-center items-center mt-2 bg-gray-100">
      <div className="container mx-auto px-4">
        {books.length > 0 ? (
          <ul className="space-y-4">
            {books.map((book) => (
              <li
                key={book._id}
                className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center"
              >
                <div>
                  <p className="text-xl font-semibold text-blue-600">
                    {book.title}
                  </p>
                  <p className="text-md text-gray-800">{book.author}</p>
                  <p className="text-sm text-gray-500">{book.genre}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleEdit(book._id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No books available.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;

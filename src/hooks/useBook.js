// hooks/useBooks.js
import { useState, useEffect } from "react";
import {
  BookService,
  CreateBook,
  deleteBook,
  updateBook,
} from "../../src/services/BookService";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(3);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState();
  const [Message, setMessage] = useState();
  // Fetch books
  useEffect(() => {
    fetchBooks();
  }, []);

  // Handle adding a book
  const addBook = async (bookData) => {
    try {
      const response = await CreateBook(bookData);
      setSuccessMessage(response.success);
      setMessage(response.message);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      if (response.success) {
        const newBook = response.data;
        setBooks((prevBooks) => [...prevBooks, newBook]);
      }
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  // Handle deleting a book
  const removeBook = async (id) => {
    try {
      const response = await deleteBook(id);
      setSuccessMessage(response.success);
      setMessage(response.message);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // Handle updating a book
  const editBook = async (id, bookData) => {
    const response = await updateBook(id, bookData);
    if (response.success) {
      fetchBooks();
      setBooks((books) =>
        books.map((book) =>
          book._id === id ? { ...book, ...response.data } : book
        )
      );
    } else {
      console.error("Error editing book:", response.message);
    }
    setSuccessMessage(response.success);
    setMessage(response.message);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };
  // Fetch books
  const fetchBooks = async () => {
    try {
      const data = await BookService();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };

  // Search and filter books
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  return {
    books: currentBooks,
    filteredBooks, 
    booksPerPage,
    addBook,
    removeBook,
    editBook,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    showSuccessMessage,
    SuccessMessage,
    Message,
    totalPages: Math.ceil(filteredBooks.length / booksPerPage),
  };
};
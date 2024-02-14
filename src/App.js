import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BookForm from "./Components/Form/Form";
import UpdateForm from "./Components/Form/UpdateForm";
import BookList from "./Components/List/List";
import SearchBar from "./Components/Search/Search";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  BookService,
  CreateBook,
  deleteBook,
  updateBook,
} from "../src/services/BookService";

function App() {
  const [books, setBooks] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState();
  const [Message, setMessage] = useState();
  useEffect(() => {
    fetchBooks();
  }, []);
  const handleAddBook = async (bookData) => {
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
  const handleDeleteBook = async (id) => {
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
  const handleEditBook = async (id, data) => {
    const response = await updateBook(id, data);
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
  const fetchBooks = async () => {
    try {
      const data = await BookService();
      setBooks(data);
    } catch (error) {
      console.error("Failed to fetch books:", error);
    }
  };
  return (
    <Router>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BookForm
                  Message={Message}
                  SuccessMessage={SuccessMessage}
                  showSuccessMessage={showSuccessMessage}
                  onAddBook={handleAddBook}
                />
                <SearchBar />
                <BookList books={books} onDeleteBook={handleDeleteBook} />
              </>
            }
            exact
          />
          <Route
            path="/:id"
            element={
              <>
                <UpdateForm
                  Message={Message}
                  SuccessMessage={SuccessMessage}
                  showSuccessMessage={showSuccessMessage}
                  EditBook={handleEditBook}
                />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
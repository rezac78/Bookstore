import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BookForm from "./Components/Form/Form";
import BookList from "./Components/List/List";
import SearchBar from "./Components/Search/Search";
import { useEffect, useState } from "react";
import {
  BookService,
  CreateBook,
  deleteBook,
} from "../src/services/BookService";

function App() {
  const [books, setBooks] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState();
  const [Message, setMessage] = useState();
  useEffect(() => {
    BookService()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("Failed to fetch books:", error);
      });
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
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <BookForm
        Message={Message}
        SuccessMessage={SuccessMessage}
        showSuccessMessage={showSuccessMessage}
        onAddBook={handleAddBook}
      />
      <SearchBar />
      <BookList books={books} onDeleteBook={handleDeleteBook} />
    </div>
  );
}

export default App;

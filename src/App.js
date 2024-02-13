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
      await deleteBook(id);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <BookForm onAddBook={handleAddBook} />
      <SearchBar />
      <BookList books={books} onDeleteBook={handleDeleteBook} />
    </div>
  );
}

export default App;

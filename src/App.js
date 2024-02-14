import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BookForm from "./Components/Form/Form";
import UpdateForm from "./Components/Form/UpdateForm";
import BookList from "./Components/List/List";
import SearchBar from "./Components/Search/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pagination from "./Components/Shared/Pagination/Pagination";
import { useBooks } from "./hooks/useBook";

function App() {
  const {
    books,
    addBook,
    removeBook,
    editBook,
    setSearchQuery,
    showSuccessMessage,
    SuccessMessage,
    setCurrentPage,
    booksPerPage,
    Message,
    filteredBooks,
  } = useBooks();
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
                  onAddBook={addBook}
                />
                <SearchBar onSearch={setSearchQuery} />
                <BookList books={books} onDeleteBook={removeBook} />
                <Pagination
                  booksPerPage={booksPerPage}
                  totalBooks={filteredBooks.length}
                  paginate={setCurrentPage}
                />
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
                  EditBook={editBook}
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
import BookForm from "../Form/Form";
import BookList from "../List/List";
import SearchBar from "../Search/Search";
import Pagination from "../Shared/Pagination/Pagination";
import { useBooks } from "../../hooks/useBook";

function Home() {
  const {
    books,
    addBook,
    removeBook,
    setSearchQuery,
    showSuccessMessage,
    SuccessMessage,
    setCurrentPage,
    booksPerPage,
    Message,
    filteredBooks,
  } = useBooks();
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
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
    </div>
  );
}
export default Home;

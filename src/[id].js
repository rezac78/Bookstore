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
  updateBook,
} from "../src/services/BookService";
import BookFormUpdate from "./Components/Form/UpdateForm";

function UpdatePage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState();
  const [Message, setMessage] = useState();
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <BookFormUpdate
        Message={Message}
        SuccessMessage={SuccessMessage}
        showSuccessMessage={showSuccessMessage}
      />
    </div>
  );
}

export default UpdatePage;

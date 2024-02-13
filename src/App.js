import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BookForm from "./Components/Form/Form";
import BookList from "./Components/List/List";
import SearchBar from "./Components/Search/Search";

function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Navbar />
      <BookForm />
      <SearchBar/>
      <BookList />
    </div>
  );
}

export default App;

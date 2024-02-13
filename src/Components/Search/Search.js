import React, { useState } from "react";
import PartButton from "../Shared/Button/Button";
import PartInputs from "../Shared/Inputs/Input";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex items-center">
          <PartInputs
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            Change={(e) => setQuery(e.target.value)}
            Title={query}
            type={"text"}
            id={"search"}
            placeholder="Search for books..."
            TypeFor="Searchbar"
          />
          <PartButton
            Title="Search"
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
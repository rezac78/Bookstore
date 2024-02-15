import React from "react";
import PartButton from "../Shared/Button/Button";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="w-11/12 md:w-full max-w-md">
        <div className="flex items-center">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search for books..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <PartButton
            Title="Search"
            type="submit"
            className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-r-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
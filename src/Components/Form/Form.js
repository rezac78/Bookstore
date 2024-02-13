import React, { useState } from "react";
import { Inputs } from "../../Events/Events";
import PartInputs from "../Shared/Inputs/Input";
import PartButton from "../Shared/Button/Button";
const BookForm = ({ onSubmit, initialData = {} }) => {
  const [book, setBook] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-8"
      >
        <div className="mb-4">
          {Inputs.map((e) => (
            <PartInputs
              className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              Change={handleChange}
              Title={e.InputTitle}
              type={e.type}
              id={e.id}
              TypeFor="validation"
            />
          ))}
        </div>
        <PartButton
          Title="Submit"
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md transition duration-200"
        />
      </form>
    </div>
  );
};

export default BookForm;

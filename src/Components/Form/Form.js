import React from "react";
import { Inputs } from "../../Events/Events";
import { yupResolver } from "@hookform/resolvers/yup";
import PartInputs from "../Shared/Inputs/Input";
import PartButton from "../Shared/Button/Button";
import { useForm } from "react-hook-form";
import { FormValidationSchema } from "../../shema/Form";
const BookForm = ({ onAddBook }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const onSubmit = async (data) => {
    await onAddBook(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-white rounded-lg shadow-md p-8"
      >
        <div className="mb-4">
          {Inputs.map((e) => (
            <PartInputs
              className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              Title={e.InputTitle}
              Register={register}
              type={e.type}
              id={e.id}
              TypeFor="validation"
              error={errors}
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

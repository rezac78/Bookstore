import React from "react";
import { Inputs } from "../../Events/Events";
import { yupResolver } from "@hookform/resolvers/yup";
import PartInputs from "../Shared/Inputs/Input";
import PartButton from "../Shared/Button/Button";
import { useForm } from "react-hook-form";
import { FormValidationSchema } from "../../shema/Form";
import PartAlert from "../Shared/Alert/Alert";
const BookForm = ({
  onAddBook,
  Message,
  showSuccessMessage,
  SuccessMessage,
}) => {
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
      {showSuccessMessage && (
        <PartAlert Message={Message} type={SuccessMessage} />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 md:w-full max-w-lg bg-gray-100 rounded-lg shadow-md p-8"
      >
        <div className="mb-4 text-left">
          {Inputs.map((e, i) => (
            <PartInputs
              className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              Title={e.InputTitle}
              Register={register}
              type={e.type}
              id={e.id}
              keyId={i}
              key={i}
              TypeFor="validation"
              error={errors}
            />
          ))}
        </div>
        <PartButton
          Title="Submit"
          type="submit"
          className="w-full px-4 py-2 bg-blue-700 hover:bg-blue-500 text-white font-bold rounded-md transition duration-200"
        />
      </form>
    </div>
  );
};

export default BookForm;

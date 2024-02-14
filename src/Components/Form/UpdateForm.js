import React, { useEffect, useState } from "react";
import { Inputs } from "../../Events/Events";
import { yupResolver } from "@hookform/resolvers/yup";
import PartInputs from "../Shared/Inputs/Input";
import PartButton from "../Shared/Button/Button";
import { useForm } from "react-hook-form";
import { FormValidationSchema } from "../../shema/Form";
import PartAlert from "../Shared/Alert/Alert";
import { useParams, useNavigate } from "react-router-dom";
import { GetOneBook } from "../../services/BookService";
const BookFormUpdate = ({
  Message,
  showSuccessMessage,
  SuccessMessage,
  EditBook,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    defaultValues: book,
  });
  useEffect(() => {
    GetOneBook(id)
      .then((data) => {
        setBook(data);
        reset(data);
      })
      .catch((error) => {
        console.error("Failed to fetch the book:", error);
      });
  }, [id, reset]);
  const onSubmit = async (data) => {
    await EditBook(id, data);
    navigate('/');
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      {showSuccessMessage && (
        <PartAlert Message={Message} type={SuccessMessage} />
      )}
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

export default BookFormUpdate;

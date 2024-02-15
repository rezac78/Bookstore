import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { LoginInput } from "../../Events/Events";
import PartInputs from "../Shared/Inputs/Input";
import PartButton from "../Shared/Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormValidationLoginSchema } from "../../shema/Form";
import { LoginService } from "../../services/AuthService";
import PartAlert from "../Shared/Alert/Alert";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login } = useAuth();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [SuccessMessage, setSuccessMessage] = useState();
  const [Message, setMessage] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FormValidationLoginSchema),
  });
  const onSubmit = async (data) => {
    try {
      const response = await LoginService(data);
      setSuccessMessage(response.success);
      setMessage(response.message);
      setShowSuccessMessage(true);
      localStorage.setItem("token", response.token);
      if (response.success) {
        login(response.token);
        reset();
      }
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log("Login failed. Please try again.");
    }
  };

  return (
    <div className="relative flex-grow flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      {showSuccessMessage && (
        <PartAlert Message={Message} type={SuccessMessage} />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-11/12 md:w-full max-w-lg bg-gray-100 rounded-lg shadow-md p-8"
      >
        <div className="mb-4 text-left">
          {LoginInput.map((e, i) => (
            <PartInputs
              className="mt-1 px-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              Title={e.InputTitle}
              Register={register}
              type={e.type}
              id={e.id}
              key={i}
              keyId={i}
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

export default Login;

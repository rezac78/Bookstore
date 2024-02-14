import React from "react";

const PartInputs = ({
  Title,
  type,
  id,
  className,
  TypeFor,
  placeholder,
  Register,
  error,
}) => {
  const inputClassName = `${className} ${
    error ? "border-red-500" : "border-gray-300"
  }`;
  return (
    <div className="mb-4">
       {TypeFor !== "Searchbar" && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {Title}
        </label>
      )}
      <input
        type={type}
        {...Register(id)}
        id={id}
        name={id}
        className={inputClassName}
        placeholder={placeholder || ""}
      />
      {error && <p className="text-sm text-red-500">{error[id]?.message}</p>}
    </div>
  );
};

export default PartInputs;

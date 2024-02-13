import React from "react";
const PartInputs = ({
  Title,
  type,
  id,
  Change,
  className,
  TypeFor,
  placeholder,
}) => {
  return (
    <div>
      {TypeFor === "Searchbar" ? null : (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {Title}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        value={Title || ""}
        onChange={Change}
        className={className}
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default PartInputs;

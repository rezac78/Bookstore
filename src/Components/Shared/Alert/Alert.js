import React from "react";
const PartAlert = ({ type, Message }) => {
  return (
    <div
      className={`fixed top-20 left-2 z-50 p-4 ${
        type === true
          ? "bg-green-100 text-green-700 border border-green-600"
          : type === false
          ? "bg-red-100 text-red-700 border border-red-600"
          : "bg-yellow-100 text-yellow-700 border border-yellow-600"
      } rounded-md`}
    >
      {Message}
    </div>
  );
};

export default PartAlert;

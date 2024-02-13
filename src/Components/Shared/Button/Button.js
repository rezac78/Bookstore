import React from "react";
const PartButton = ({ type, className, Title, onClick }) => {
  return (
    <button onClick={onClick || null} type={type} className={className}>
      {Title}
    </button>
  );
};

export default PartButton;

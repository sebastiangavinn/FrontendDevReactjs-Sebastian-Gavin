import React from "react";

export const Button = ({ text, className, onClick }) => {
  return (
    <button
      className={`border py-2 px-4 text-base text-[#002b57] border-[#002b57] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

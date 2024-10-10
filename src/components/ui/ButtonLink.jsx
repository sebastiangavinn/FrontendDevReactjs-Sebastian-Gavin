import React from "react";
import { Link } from "react-router-dom";

export const ButtonLink = ({ href, text, className }) => {
  return (
    <Link
      className={`bg-[#002b57] text-white block text-center py-2 px-4 ${className}`}
      to={href}
    >
      {text}
    </Link>
  );
};

import React from "react";
import { ButtonLink } from "./ButtonLink";

export const Card = ({ id, name, image, rating, category, price, isOpen }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg space-y-2">
      {/* <div className="bg-gray-200 h-48 w-full mb-4"></div> */}
      <img src={image} alt={name} className="bg-gray-200 h-48 w-full mb-4" />

      <h3 className="text-lg font-semibold">{name}</h3>

      <div className="flex text-xl text-[#002b57]">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </div>

      <div className="flex items-center justify-between text-xs">
        <div className="text-gray-500">
          {category} • {price}
        </div>
        <div className="flex items-center">
          <div
            className={`h-2 w-2 rounded-full mr-2 ${
              isOpen ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <p className="text-gray-500">{isOpen ? "OPEN NOW" : "CLOSED"}</p>
        </div>
      </div>

      <ButtonLink href={`restaurant-detail/${id}`} text="Learn More" />
    </div>
  );
};

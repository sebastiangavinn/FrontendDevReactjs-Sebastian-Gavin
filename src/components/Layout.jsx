import React, { Children } from "react";

export const Layout = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto p-4">{children}</div>;
};

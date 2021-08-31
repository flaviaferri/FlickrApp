import React from "react";

export default function Title({ children }) {
  return (
    <>
      <div className="mt-4 mb-4">
        <h1 className="text-4xl font-semibold capitalize">{children}</h1>
      </div>
    </>
  );
}

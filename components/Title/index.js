import React from "react";

export default function Title({ children }) {
  return (
    <>
      <div className="mt-4 mb-2">
        <h1 className="text-xl font-semibold">{children}</h1>
      </div>
    </>
  );
}

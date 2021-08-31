import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Input({ handleSubmit }) {
  const [value, setValue] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      return handleSubmit(value);
    }
  };
  return (
    <>
      <div className="relative w-full">
        <input
          className="w-full h-12 pl-4 py-5 flex text-lg bg-gray-200 rounded-lg outline-none"
          name="search"
          type="text"
          placeholder="Search Pictures"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
          value={value}
        />
        <FaSearch
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => handleSubmit(value)}
        />
      </div>
    </>
  );
}

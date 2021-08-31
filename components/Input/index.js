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
      <div className="relative w-9/12">
        <input
          className="w-full h-9 flex items-center justify-center bg-gray-100 rounded-lg outline-none "
          name="size"
          type="text"
          placeholder="Search Pictures"
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
          value={value}
        ></input>
        <FaSearch
          className="absolute right-2 top-2 cursor-pointer"
          onClick={() => handleSubmit(value)}
        />
      </div>
    </>
  );
}

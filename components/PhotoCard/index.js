import React from "react";

export default function PhotoCard({ photos }) {
  return (
    <>
      <div className="flex flex-wrap my-8">
        <div className="grid grid-cols-4 gap-6 w-full h-1/2  ">
          {photos?.map((photo, index) => (
            <div
              key={index}
              className="inset-0 w-full h-full object-cover rounded-lg bg-center bg-cover shadow-lg"
              style={{
                height: "200px",
                backgroundImage: `url(https://live.staticflickr.com/${photo?.server}/${photo?.id}_${photo?.secret}_b.jpg)`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

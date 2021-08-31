import React from "react";
import Image from "next/image";

export default function PhotoCard({ photos }) {
  return (
    <>
      <div className="flex flex-wrap my-8">
        <div className="grid grid-cols-4 gap-6 w-full h-1/2">
          {photos?.map((photo, index) => (
            <Image
              key={index}
              className="inset-0 w-full h-full object-cover rounded-lg"
              src={`https://live.staticflickr.com/${photo?.server}/${photo?.id}_${photo?.secret}_b.jpg`}
              alt="Picture from Flickr"
              height={300}
              width={250}
            />
          ))}
        </div>
      </div>
    </>
  );
}

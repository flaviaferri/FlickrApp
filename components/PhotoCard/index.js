import React from "react";
import Link from "next/link";

export default function PhotoCard({ photos }) {
  return (
    <>
      <div className="flex flex-wrap my-6">
        <div className="grid grid-cols-1 gap-2 w-full h-1/2 sm:grid-cols-3 sm:ap-4 md:grid-cols-4 md:gap-6">
          {photos?.map((photo, index) => (
            <Link key={index} href={`/detail/${photo?.id}`} passHref>
              <a className="cursor-pointer">
                <div
                  className="inset-0 w-full h-full object-cover rounded-lg bg-center bg-cover shadow-lg"
                  style={{
                    height: "200px",
                    backgroundImage: `url(https://live.staticflickr.com/${photo?.server}/${photo?.id}_${photo?.secret}_b.jpg)`,
                  }}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

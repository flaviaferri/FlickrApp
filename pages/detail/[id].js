import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import axios from "axios";
import BackButtonIcon from "../../components/BackButtonIcon";

export default function Detail() {
  const [infoPhoto, setInfoPhoto] = useState();
  const router = useRouter();

  console.log(infoPhoto);
  useEffect(() => {
    const getInfoPhotos = async () => {
      try {
        const response = await axios.get(`/api/detail?id=${router.query.id}`);
        setInfoPhoto(response.data.photo);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getInfoPhotos();
  }, []);

  return (
    //grid-cols-2 gap-8
    <>
      <div className="relative m-7 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8">
        <div
          className="w-full h-full bg-center bg-cover bg-no-repeat shadow-lg"
          style={{
            height: "100vh",
            backgroundImage: `url(https://live.staticflickr.com/${infoPhoto?.server}/${infoPhoto?.id}_${infoPhoto?.secret}_b.jpg)`,
          }}
        />
        <div>
          <div className="mb-5 mt-5">
            <button
              className="text-xl font-semibol inline-flex items-center"
              onClick={() => Router.back()}
            >
              <BackButtonIcon width="20" height="20" />
              <span className="ml-4">Back to previous page</span>
            </button>
          </div>
          <div className="mb-5 mt-5">
            <p className="text-xl font-semibold">Owner</p>
            <p className="text-lg">{infoPhoto?.owner?.username || "Unknown"}</p>
          </div>
          <div className="mb-5">
            <p className="text-xl font-semibold">Title</p>
            <p className="text-lg">{infoPhoto?.title?._content || "Unknown"}</p>
          </div>
          <div className="mb-5">
            <p className="text-xl font-semibold">Description</p>
            <p className="text-lg">
              {infoPhoto?.description?._content || "Unknown"}
            </p>
          </div>
          <div className="mb-5">
            <p className="text-xl font-semibold">Views</p>
            <p className="text-lg">{infoPhoto?.views || "Unknown"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

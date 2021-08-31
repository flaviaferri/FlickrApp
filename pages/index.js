import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

import Title from "../components/Title";
import Input from "../components/Input";
import PhotoCard from "../components/PhotoCard";

export default function Home() {
  const [search, setSearch] = useState();
  const [photos, setPhotos] = useState([]);

  console.log(photos);
  // responsible to call the API
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await axios.get(`/api/search?search=${search}`);
        setPhotos(response.data.photos.photo);
      } catch (error) {
        // setIsError(true);
      }
    };

    const getDailyPhotos = async () => {
      try {
        const response = await axios.get(`/api/daily`);
        setPhotos(response.data.photos.photo);
        console.log("response", response);
      } catch (error) {
        // setIsError(true);
      }
    };

    if (!search) {
      getDailyPhotos();
      return;
    }

    getPhotos();
  }, [search]);

  return (
    <div>
      <Head>
        <title>Flickr Photos App</title>
        <meta name="description" content="Flickr Photos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-8">
        <Title>{search || "Flickr Daily"} Photos</Title>
        <Input handleSubmit={setSearch} />
        <PhotoCard photos={photos} />
      </main>
    </div>
  );
}

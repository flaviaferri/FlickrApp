import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";

import Title from "../components/Title";
import Input from "../components/Input";
import PhotoCard from "../components/PhotoCard";

export default function Home() {
  const [search, setSearch] = useState();
  const [photos, setPhotos] = useState([]);
  const [message, setMessage] = useState(false);

  // responsible to call the API
  useEffect(() => {
    // Get photos searched
    const getPhotos = async () => {
      try {
        const response = await axios.get(`/api/search?search=${search}`);
        console.log(response.data.photos.photo);
        if (response?.data?.photos?.photo?.length === 0) {
          setMessage(true);
        }
        setPhotos(response.data.photos.photo);
      } catch (error) {
        console.log("Error", error);
      }
    };

    console.log(message);
    // Get daily photos
    const getDailyPhotos = async () => {
      try {
        const response = await axios.get(`/api/daily`);
        setPhotos(response.data.photos.photo);
      } catch (error) {
        console.log("Error", error);
      }
    };

    // In case there is no search, get daily pictures
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
        <meta name="description" content="Flickr Photos App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-8">
        <Title>{search || "Flickr Daily"} Photos</Title>
        <Input handleSubmit={setSearch} />
        {message && (
          <p className="mt-8 text-lg font-semibold">
            Sorry, we could not find photos with this search.
          </p>
        )}
        <PhotoCard photos={photos} />
      </main>
    </div>
  );
}

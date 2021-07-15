import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "./axios";
import request from "./request";

const Banner = () => {
  const [loading, setLoading] = useState(false);

  const [randomMovie, setRandomMovie] = useState();
  useEffect(() => {
    const fetchRandomData = async () => {
      const response = await axios.get(request.fetchNetflixOriginals);
      //   get a random movie by math.floor and math.random function
      // Math.floor(Math.random() * response.data.results.length - 1);
      setRandomMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      // return response;
    };
    fetchRandomData();
  }, []);

  //   string truncate function
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
      }}
    >
      {/* this header has a background image and the below method will applied in uppon the image */}
      <div className="banner__contents">
        {/* title */}
        <h1 className="banner__title">
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name}
        </h1>
        {/* div> 2 button */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner__description">
          {truncate(randomMovie?.overview, 150)}
        </h1>
      </div>
      {/* empty div for make a distance in bottom and for linear gradient*/}
      <div className="banner__fadeBottom" />
    </header>
  );
};

export default Banner;

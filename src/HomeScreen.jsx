import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";

function HomeScreen() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Banner />
        <Row
          title="NETFLEX ORIGINALS"
          fetchURL={request.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchURL={request.fetchTrending} />
        <Row title="Top Rated" fetchURL={request.fetchTopRated} />
        <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
      </div>
    </>
  );
}
export default HomeScreen;

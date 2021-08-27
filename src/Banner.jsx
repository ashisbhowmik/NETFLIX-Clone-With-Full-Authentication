import React, { useState, useEffect } from "react";
import BannerHeader from "./BannerHeader";
import "./banner.css";

const Banner = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 4000);

  return <>{loading ? <div className="loader"></div> : <BannerHeader />}</>;
};

export default Banner;

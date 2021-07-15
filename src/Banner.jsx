import React, { useState, useEffect } from "react";
import BannerHeader from "./BannerHeader";
import { WifiLoader } from "react-awesome-loaders";
import "./banner.css";

const Banner = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return (
    <>
      {loading ? (
        <div className="loader">
          <WifiLoader
            background={"transparent"}
            desktopSize={"150px"}
            mobileSize={"150px"}
            text={"loading..."}
            backColor="#E8F2FC"
            frontColor="#4645F6"
          />
        </div>
      ) : (
        <BannerHeader />
      )}
    </>
  );
  // return (
  //   <Button
  //     onClick={clicked}
  //     style={{
  //       color: "red",
  //       position: "absolute",
  //       top: "300px",
  //       background: "red",
  //       color: "black",
  //     }}
  //   >
  //     Click
  //   </Button>
  // );
};

export default Banner;

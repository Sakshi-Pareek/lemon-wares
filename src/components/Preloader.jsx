import React from "react";
import Loader from "../assets/images/webp/FooterLogo.webp";

const Preloader = (i) => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center fixed bg-[#b00000]">
        <img src={Loader} alt="Loader" className="max-w-[110px] w-full" />
        <div className="loader w-[110px] h-1"></div>
      </div>
    </>
  );
};

export default Preloader;

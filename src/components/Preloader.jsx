import React from "react";
import PreLoader from "../assets/images/webp/FooterLogo.webp";

const Preloader = (i) => {
  return (
    <>
      <div className="w-full h-screen flex flex-col sm:gap-4 gap-2 justify-center items-center fixed bg-white">
        <div className="wavy relative">
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 1 }}
          >
            L
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 2 }}
          >
            o
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 3 }}
          >
            a
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 4 }}
          >
            d
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 5 }}
          >
            i
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 6 }}
          >
            n
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 7 }}
          >
            g
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 8 }}
          >
            .
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 9 }}
          >
            .
          </span>
          <span
            className="relative inline-block text-white text-4xl mt-[50%] uppercase"
            style={{ "--i": 10 }}
          >
            .
          </span>
        </div>
      </div>
    </>
  );
};

export default Preloader;

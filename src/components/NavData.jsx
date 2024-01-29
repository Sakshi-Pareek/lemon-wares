import React from "react";
import HalfTriangle from "../assets/images/webp/HalfTriangle.webp";
import HalfRightTriangle from "../assets/images/webp/HalfRightTriangle.webp";
import HalfLargeTriangle from "../assets/images/webp/HalfLargeTriangle.webp";
import GirlWihtLaptop from "../assets/images/webp/GirlWithLaptop.webp";

const NavData = (props) => {
  return (
    <>
      <div className="flex flex-wrap flex-row justify-between mx-auto lg:gap-0 md:gap-10 sm:gap-7 gap-5">
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:max-w-[608px] text-[#2E2E2E] xl:text-[64px] md:text-[40px] sm:text-[30px] text-[28px] ff_poppins font-bold leading-[121.099%] lg:mb-[34px] sm:mb-5 mb-3 mt-[26px]">
            Premium Web <span>{props.heading} </span>
            for Your Website
          </h1>
          <p className="text-[#808080] text-[16px] ff_inter font-normal leading-[175%] tracking-[0.8px] xl:mb-[60px] lg:mb-10 md:mb-7 mb-4 lg:max-w-[448px]">
            Blazing fast web {props.content} for individuals and {""}
            <br className="lg:block hidden" />
            businesses of all sizes backed by 24x7x365 Support.
          </p>
          <div className="flex items-center sm:gap-6 gap-3">
            <a
              href=""
              className="text-white ff_poppins sm:text-[14px] text-[12px] font-normal leading-[171.629%] p-3 bg-[#B00000] rounded-[8px] shadow-[0px_0px_64px_0px_rgba(176,_0,_0,_0.30)] flex justify-center items-center gap-2.5 w-[160px] hover:shadow-[0_2px_15px_rgba(176,0,0,1)] transition-all ease-linear duration-500"
            >
              Create an Account
            </a>
            <a
              href=""
              className="text-black ff_poppins sm:text-[14px] text-[12px] font-normal leading-[171.629%] py-[11px] px-3 bg-transparent border-black border rounded-[8px] flex justify-center items-center gap-2 w-[160px] hover:text-white hover:bg-black hover:shadow-2xl transition-all ease-linear duration-500"
            >
              Choose your plan
            </a>
          </div>
        </div>
        <div className="lg:w-[41.5%] w-full flex justify-center xl:px-0 sm:px-5">
          <div className="relative lg:max-w-[501px]">
            <img
              src={GirlWihtLaptop}
              alt="GirlWihtLaptop"
              className="lg:max-w-[501px] w-full xl:translate-y-[-15px]"
            />
            <img
              src={HalfTriangle}
              alt="HalfTriangle"
              className="absolute top-1/2 -translate-x-[65%] sm:w-[40px] w-[30px]"
            />
            <img
              src={HalfRightTriangle}
              alt="HalfRightTriangle"
              className="absolute top-[12%] right-0 translate-x-[65%] sm:w-[40px] w-[30px]"
            />
            <img
              src={HalfLargeTriangle}
              alt="HalfLargeTriangle"
              className="absolute top-[75%] right-0 translate-x-[30%] xl:w-[72px] sm:w-[55px] w-[40px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavData;

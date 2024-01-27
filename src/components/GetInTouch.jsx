import React from "react";

import HalfTriangle from "../assets/images/webp/HalfTriangle.webp";
import HalfRightTriangle from "../assets/images/webp/HalfRightTriangle.webp";
import HalfLargeTriangle from "../assets/images/webp/HalfLargeTriangle.webp";
import { WhatsApp } from "./Icon";

const GetInTouch = () => {
  return (
    <>
      <div className="lg:pt-[106px] lg:pb-[110px] sm:py-[80px] pb-12 pt-6">
        <div className="container xl:max-w-[1296px] lg:px-3 px-6 mx-auto relative" data-aos="fade-up" id="Account">
          <img
            src={HalfLargeTriangle}
            alt="HalfLargeTriangle"
            className="absolute max-w-[40px] md:max-w-[70px] w-full right-[7%] xl:right-[1%] lg:right-[6px] md:right-[12px] sm:right-4 bottom-[8%] sm:block hidden"
          />
          <img
            src={HalfRightTriangle}
            alt="HalfRightTriangle"
            className="absolute max-w-[40px] w-full left-[34%] sm:block hidden"
          />
          <img
            src={HalfTriangle}
            alt="HalfTriangle"
            className="absolute max-w-[40px] w-full bottom-[20%] left-[6%] xl:left-[13px] lg:left-[4px] md:left-[15px] sm:left-4 sm:block hidden"
          />

          <div className="rounded-[16px] bg-[#F7FAFE] py-[65px] lg:pt-[80px] lg:pb-[88px] max-w-[1232px] px-[20px] lg:px-[0] mx-auto">
            <div className="flex justify-center items-center flex-col">
              <p className="ff_poppins text-[22px] sm:text-[35px] md:text-[44px] lg:text-[64px] font-semibold leading-[137%] text-[#2E2E2E] max-w-[1024px] text-center pb-[24px] sm:pb-[40px]">
                We're here to make your website awesome.
              </p>
              <button>
                <a
                  href="https://web.whatsapp.com/"
                  target="blank"
                  className="flex gap-[9px] items-center bg-[#B00000] rounded-[8px] px-[15px] py-[10px] sm:px-[18.1px] sm:pt-[12px] sm:pb-[11px] hover:shadow-[0_2px_15px_rgba(176,0,0,1)] transition-all ease-linear duration-500"
                >
                  <WhatsApp/>
                  <p className="m-0 ff_poppins text-[#FFFFFF] text-[14px] font-normal text-nowrap">
                    Get in touch with us
                  </p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;

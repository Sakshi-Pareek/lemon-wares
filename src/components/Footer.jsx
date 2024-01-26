import React from "react";
import { WhiteHeart } from "./Icon";
import Footerlogo from "../assets/images/webp/FooterLogo.webp";

const Footer = () => {
  return (
    <>
      <div className="bg-[#B00000] md:pt-[64px] md:pb-20 py-12">
        <div className="container xl:max-w-[1296px] lg:px-3 px-6 mx-auto">
          <div className="flex flex-wrap flex-row items-center mb-12 md:mb-[80px] lg:mb-[104px]">
            <div className="lg:w-[33%] w-full">
              <a href=""><img
                src={Footerlogo}
                alt="Footerlogo"
                className="sm:max-w-[120px] max-w-[100px] w-full"
              /></a>
              <p className="ff_inter font-normal text-[16px] text-[#E6E6E6] lg:max-w-[296px] leading-[181%] m-0 pt-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor rhoncus dolor purus non enim praesent elem
              </p>
            </div>
            <div className="lg:w-[67%] w-full pt-[40px] lg:pt-[0]">
              <div className="flex flex-row flex-wrap max-md:gap-8 justify-between">
                <div className="md:w-[25%] w-[40] lg:mt-4 flex xl:justify-center lg:justify-end">
                  <ul className="flex flex-col gap-4 md:gap-6">
                    <li className="text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%]">
                      Service
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] hover:text-white transition-all ease-linear duration-300 text-[16px] font-normal leading-[200%] inline-block hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                      >
                        Domain
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] hover:text-white transition-all ease-linear duration-300 text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                      >
                        Shared Hosting
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Cloud Hosting
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Private Hosting
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="md:w-[30%] w-[45%] lg:mt-4 flex xl:justify-center lg:justify-end">
                  <ul className="flex flex-col gap-4 md:gap-6">
                    <li className="text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%]">
                      Hosting
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Cheap Hosting
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Hosting Wordpress
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Email Hosting
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Hosting Unlimited
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="md:w-[20%] w-[40%] lg:mt-4 flex xl:justify-center lg:justify-end">
                  <ul className="flex flex-col gap-4 md:gap-6">
                    <li className="text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%] pt-[14px] md:pt-[0]">
                      Company
                    </li>
                    <li>
                      <a
                        href="#about"
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Career
                      </a>
                    </li>
                    <li id="contact">
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-[23%] md:w-[20%] w-[45%] lg:mt-4 flex xl:justify-center lg:justify-end">
                  <ul className="flex flex-col gap-4 md:gap-6">
                    <li className="text-[#FFFFFF] ff_inter text-[16px] font-bold leading-[150%] pt-[14px] md:pt-[0]">
                      Help
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="ff_inter text-[#E6E6E6] text-[16px] font-normal leading-[200%] inline-block text-nowrap hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#ffffff] after:h-[2px] relative after:left-[0] after:bottom-[1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear hover:text-white transition-all ease-linear duration-300"
                      >
                        Help support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="ff_inter sm:text-[16px] text-[13px] leading-[200%] font-normal text-[#ffffff] flex items-center">
            Built by Jeremiah with
            <span className="sm:mx-2 px-1">
              <WhiteHeart />
            </span>
            in Lagos. Copyright 2021
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

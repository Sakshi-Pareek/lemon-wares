import React from "react";
import { BlueComma, PinkComma } from "./Icon";
import CLILogo from "../assets/images/webp/CLILogo.webp";
import JnplLogo from "../assets/images/webp/JPNLLogo.webp";
import BrandingLogo from "../assets/images/webp/BrandingLogo.webp";

const RealStory = () => {
  return (
    <>
      <div className="container xl:max-w-[1218px] lg:px-3 px-6 mx-auto">
        <div className="flex flex-row flex-wrap relative lg:gap-0 gap-8" id="Blog&News">
          <PinkComma />
          <div className="xl:w-[40%] lg:w-[50%] flex flex-col justify-end ml-auto" data-aos="fade-right">
            <h4 className="text-[#18191F] lg:text-[48px] md:text-[44px] sm:text-[38px] text-[30px] font-extrabold ff_inter leading-[133.999%] lg:max-w-[444px] lg:mt-14 mt-10 l:ml-0">
              Real Stories from Real Customers
            </h4>
            <p className="text-[#18191F] text-[18px] ff_inter font-normal leading-[178%] mt-2">
              Get inspired by these stories.
            </p>
            <div className="rounded-[8px] shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] sm:px-8 px-4 lg:max-w-[350px] mt-6 lg:mx-auto lg:ml-24 lg:pb-24 py-8 lg:pt-[7px] hover:shadow-[0px_12px_22px_0px_rgba(41,41,42,0.15)] transition-all duration-300 ease-linear cursor-pointer">
              <img
                src={CLILogo}
                alt="CLILogo"
                className="max-w-[116px] w-full ml-8 lg:mb-[47px] mb-4"
              />
              <div className="flex gap-4">
                <BlueComma />
                <ul>
                  <li className="text-black ff_inter text-[16px] font-normal leading-[200%] lg:mb-6 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </li>
                  <li className="text-[#18191F] ff_inter text-[18px] font-bold leading-[155.556%]">
                    Floyd Miles
                  </li>
                  <li className="text-[#969BAB] text-[14px] font-medium leading-[171.429%] ff_inter ">
                    Vice President, CLI
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] flex flex-col gap-8 lg:translate-y-28" data-aos="fade-left">
            <div className="rounded-[8px] shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] sm:px-8 px-4 lg:max-w-[445px] lg:pb-[14px] py-8 lg:pt-[39px] hover:shadow-[0px_12px_22px_0px_rgba(41,41,42,0.15)] transition-all duration-300 ease-linear cursor-pointer">
              <img
                src={JnplLogo}
                alt="JnplLogo"
                className="max-w-[78px] w-full ml-8 mb-[15px]"
              />
              <div className="flex gap-4">
                <BlueComma />
                <ul>
                  <li className="text-black ff_inter text-[16px] font-normal leading-[200%] lg:mb-6 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor rhoncus dolor purus non enim
                    praesent elem
                  </li>
                  <li className="text-[#18191F] ff_inter text-[18px] font-bold leading-[155.556%]">
                    Jane Cooper
                  </li>
                  <li className="text-[#969BAB] text-[14px] font-medium leading-[171.429%] ff_inter ">
                    CEO, JPNL
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-[8px] shadow-[0px_10px_20px_0px_rgba(41,41,42,0.07)] sm:px-8 px-4 lg:max-w-[350px] py-8 lg:pt-[44px] hover:shadow-[0px_12px_22px_0px_rgba(41,41,42,0.15)] transition-all duration-300 ease-linear cursor-pointer">
              <img
                src={BrandingLogo}
                alt="BrandingLogo"
                className="max-w-[120px] w-full ml-8 lg:mb-[9px] mb-4"
              />
              <div className="flex gap-4">
                <BlueComma />
                <ul>
                  <li className="text-black ff_inter text-[16px] font-normal leading-[200%] lg:mb-6 mb-4">
                    LemonWares saved our time in Hosting my company page.
                  </li>
                  <li className="text-[#18191F] ff_inter text-[18px] font-bold leading-[155.556%]">
                    Kristin Watson
                  </li>
                  <li className="text-[#969BAB] text-[14px] font-medium leading-[171.429%] ff_inter ">
                    Co-Founder, LeeveOn Branding
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealStory;

import React, { useState } from "react";
import NavData from "./NavData";
import { TelIcon } from "./Icon";
import WebLogo from "../assets/images/webp/WebLogo.webp";

const HeaderSec = () => {
  const commonheading = "Premium Web Hosting for Your Website";
  const commoncontent = "Blazing fast web hosting for individuals and";
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("max-xl:overflow-hideen");
  } else {
    document.body.classList.remove("max-xl:overflow-hideen");
  }
  const [activeTab, setActiveTab] = useState("Hosting");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="container xl:max-w-[1240px] mx-auto lg:px-3 px-6">
        <div className="flex justify-between items-center relative z-[3] md:pt-[41px] pt-6 xl:pr-20">
          <div className="flex items-center gap-[90px] xl:gap-[135px]">
            <div className="flex gap-[55px] xl:gap-[65px] items-center">
              <img
                src={WebLogo}
                alt="WebLogo"
                className="sm:max-w-[90px] max-w-[78px] w-full cursor-pointer"
              />
              <a
                onClick={() => setShow(!show)}
                href="#service"
                className="m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] cursor-pointer text-nowrap hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:block hidden"
              >
                Our Services
              </a>
            </div>
            <ul
              className={`${
                show ? "left-[-100%]" : "left-0 bg-[#ffffff]"
              } flex items-center gap-[33px] flex-row max-lg:fixed max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}
            >
              <li onClick={() => setShow(!show)}>
                <a
                  href="#service"
                  className="m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:hidden block"
                >
                  Our Services
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#about"
                  className="m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  About
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#Blog&News"
                  className="m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-4px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear text-nowrap"
                >
                  Blog&News
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#contact"
                  className="m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:mx-auto after:right-0 after:w-0 after:absolute after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-3px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Contact
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#Account"
                  className="m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-1px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:hidden"
                >
                  Account
                </a>
              </li>
              <li className="flex items-center gap-[6px] sm:hidden">
                <TelIcon />
                <a
                  href="tel:+2349067322844"
                  className="m-0 ff_poppins font-semibold text-[16px] text-[#000000] leading-[93.75%]"
                >
                  +2349067322844
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-[20px] lg:gap-[30px]">
            <div className="flex items-center gap-[31px]">
              <a
                href="#Account"
                onClick={() => setShow(!show)}
                className="m-0 ff_poppins font-semibold text-[15px] text-[#000000] leading-[100%] hover:after:w-[72%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#B00000] after:h-[2px] relative after:left-[0] after:bottom-[-3px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear lg:block hidden"
              >
                Account
              </a>
              <div className="bg-[#DAd8d8] w-[1px] h-[19px] lg:block hidden"></div>
            </div>
            <div>
              <a
                href=" tel:+2349067322844"
                className="m-0 ff_poppins font-semibold text-[16px] text-[#000000] leading-[93.75%] sm:flex items-center gap-[6px] hidden group"
              >
                <TelIcon />
                <span className="group-hover:text-[#B00000] duration-300 ease-linear transition-all">
                  +2349067322844
                </span>
              </a>
            </div>
            <div
              onClick={() => setShow(!show)}
              className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-[6] flex justify-between flex-col"
            >
              <span
                className={`${
                  show
                    ? ""
                    : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                } bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "hidden"
                } bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
              <span
                className={`${
                  show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-[#B00000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container xl:max-w-[1240px] lg:px-3 px-6 mx-auto lg:pt-20 sm:pt-14 pt-10"
        data-aos="fade-up" id="Account"
      >
        <nav className="flex items-center relative after:absolute after:w-full after:h-[1px] after:bg-[#E5E5E5] after:left-1 after:bottom-[-4px] after:max-w-[242px]">
          <button
            className={`ff_poppins text-[15px] font-semibold leading-normal mr-[23px] relative ${
              activeTab === "Hosting"
                ? "text-[#B00000] transition-all duration-500 ease-in-out after:absolute after:w-full after:h-[1px] after:bg-[#B00000] after:left-0 after:right-0 after:bottom-[-4px] after:max-w-[80%] after:mx-auto z-10 after:transition-all after:duration-500 after:ease-in-out"
                : "text-[#DBD9D9]"
            }`}
            onClick={() => handleTabClick("Hosting")}
          >
            Hosting
          </button>
          <button
            className={`ff_poppins text-[15px] font-semibold leading-normal mr-[18px] relative ${
              activeTab === "Domain"
                ? "text-[#B00000] transition-all duration-500 ease-in-out after:absolute after:w-full after:h-[1px] after:bg-[#B00000] after:left-0 after:right-0 after:bottom-[-4px] after:max-w-[80%] after:mx-auto z-10 after:transition-all after:duration-500 after:ease-in-out"
                : "text-[#DBD9D9]"
            }`}
            onClick={() => handleTabClick("Domain")}
          >
            Domain
          </button>
          <button
            className={`ff_poppins text-[15px] font-semibold leading-normal mr-[15px] relative ${
              activeTab === "SEO"
                ? "text-[#B00000] transition-all duration-500 ease-in-out after:absolute after:w-full after:h-[1px] after:bg-[#B00000] after:left-0 after:right-0 after:bottom-[-4px] after:max-w-[80%] after:mx-auto z-10 after:transition-all after:duration-500 after:ease-in-out"
                : "text-[#DBD9D9]"
            }`}
            onClick={() => handleTabClick("SEO")}
          >
            SEO
          </button>
          <button
            className={`ff_poppins text-[15px] font-semibold leading-normal relative ${
              activeTab === "Email"
                ? "text-[#B00000] transition-all duration-500 ease-in-out after:absolute after:w-full after:h-[1px] after:bg-[#B00000] after:left-0 after:right-0 after:bottom-[-4px] after:max-w-[80%] after:mx-auto z-10 after:transition-all after:duration-500 after:ease-in-out"
                : "text-[#DBD9D9]"
            }`}
            onClick={() => handleTabClick("Email")}
          >
            Email
          </button>
        </nav>
        {activeTab === "Hosting" && (
          <NavData heading="Hosting" content="hosting" />
        )}
        {activeTab === "Domain" && (
          <NavData heading="Domain" content="domain" />
        )}
        {activeTab === "SEO" && <NavData heading="SEO" content="seo" />}
        {activeTab === "Email" && <NavData heading="Email" content="emails" />}
      </div>
    </>
  );
};

export default HeaderSec;

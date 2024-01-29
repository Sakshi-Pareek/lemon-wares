import React from "react";
import Cpanel from "../assets/images/webp/Cpanel.webp";
import Secured from "../assets/images/webp/securedby360.webp";
import LiteSpeed from "../assets/images/webp/litespeed.webp";
import SoftImg from "../assets/images/webp/Softaculous.webp";
import WordPress from "../assets/images/webp/WordPress.webp";
import CloudFlare from "../assets/images/webp/CloudFlare.webp";
import uptime from "../assets/images/webp/UpTime.webp";
import BlazingImg from "../assets/images/webp/Hoisting.webp";
import Certificates from "../assets/images/webp/Certificated.webp";
import FriendlySupport from "../assets/images/webp/FriendlySupport.webp";

const WebHosting = () => {
  const Trueweb = [
    {
      Image: uptime,
      heading: "99.9% Uptime",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      Image: BlazingImg,
      heading: "Blazing Fast Web Hosting",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      Image: Certificates,
      heading: "Free SSL Certificates",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
    {
      Image: FriendlySupport,
      heading: "24x7 Friendly Support",
      content:
        "We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.",
    },
  ];
  return (
    <>
      <div className="container xl:max-w-[1308px] lg:px-3 px-6 mx-auto lg:mt-[104px] sm:mt-20 mt-12" id="about">
        <div className="flex flex-row flex-wrap items-center justify-between lg:pb-[100px] sm:pb-[70px] pb-[50px]">
          <div className="lg:w-[46%] w-full" data-aos="fade-right">
            <h2 className="text-[#18191F] ff_inter xl:text-[48px] lg:text-[35px] md:text-[44px] sm:text-[38px] text-[27px] font-extrabold leading-[133.333%] sm:mb-4 mb-3">
              True Cloud Web Hosting
            </h2>
            <p className="lg:max-w-[573px] ff_inter sm:text-[18px] text-[16px] font-normal leading-[177.778%] text-[#18191F]">
              True Cloud Web Hosting All of the hosting packages we offer are
              deployed instantly on our SSD powered cloud. We don’t use
              dedicated servers that operate on single pieces of hardware. Our
              entire infrastructure is built to be reliable, secure, and
              scalable.
            </p>
          </div>
          <div className="lg:w-[48%] w-full pt-7 lg:pt-0 lg:translate-y-[10px]" data-aos="fade-left">
            <div className="flex flex-row items-center flex-wrap">
              <div className="sm:w-4/12 w-6/12 sm:mb-[55px] mb-0">
                <img
                  src={Cpanel}
                  alt="Cpanel"
                  className="w-full sm:h-[30px] h-[20px] sm:max-w-[140.714px] max-w-[120px] lg:ml-auto max-lg:mx-auto"
                />
              </div>
              <div className="sm:w-4/12 w-6/12 sm:mb-[55px] mb-0 ">
                <img
                  src={Secured}
                  alt="Secured"
                  className="w-full sm:h-[50px] h-[40px] sm:max-w-[125.424px] max-w-[120px] lg:ml-auto max-lg:mx-auto"
                />
              </div>
              <div className="sm:w-4/12 w-6/12 sm:mb-[55px] mb-0">
                <img
                  src={LiteSpeed}
                  alt="LiteSpeed"
                  className="w-full sm:h-[53px] h-[43px] sm:max-w-[125px] max-w-[120px] lg:ml-auto max-lg:mx-auto"
                />
              </div>
              <div className="sm:w-4/12 w-6/12">
                <img
                  src={SoftImg}
                  alt="SoftImg"
                  className="w-full sm:h-[92px] h-[82px] sm:max-w-[172px] max-w-[120px] lg:ml-auto max-lg:mx-auto"
                />
              </div>
              <div className="sm:w-4/12 w-6/12">
                <img
                  src={WordPress}
                  alt="WordPress"
                  className="w-full sm:h-[56px] h-[46px] sm:max-w-[168px] max-w-[120px] lg:ml-auto max-lg:mx-auto"
                />
              </div>
              <div className="sm:w-4/12 w-6/12">
                <img
                  src={CloudFlare}
                  alt="CloudFlare"
                  className="w-full sm:h-[47px] h-[37px] sm:max-w-[143px] max-w-[120px] lg:ml-auto max-lg:mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row xl:justify-around flex-wrap md:justify-center sm:justify-between justify-center xl:gap-0 md:gap-8">
          {Trueweb.map((a, index) => (
            <div
              className="group xl:w-[20%] lg:w-[36%] sm:w-[40%] cursor-pointer w-[80%] mb-8 xl:mb-0 flex justify-center flex-col items-center"
              key={index} data-aos="fade-up"
            >
              <img
                src={a.Image}
                alt="image"
                className="w-full max-w-[100px] group-hover:scale-[0.9] transition-all duration-300 ease-linear"
              />
              <h3 className="mt-3 text-black text-center ff_poppins text-[20px] font-bold text-nowrap">
                {a.heading}
              </h3>
              <p className="mt-1 text-black text-[12px] font-light text-center ff_poppins">
                {a.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WebHosting;

import React from "react";
import JPNL from "../assets/images/webp/ServerJPNL.webp";
import KoraneScents from "../assets/images/webp/KoraneScents.webp";
import NadineGhaida from "../assets/images/webp/NadineGhaida.webp";
import LeeveOnBranding from "../assets/images/webp/LeeveOnBranding.webp";
import JrangoGlasses from "../assets/images/webp/Jrangoolass.webp";
import CryptoLearnInvest from "../assets/images/webp/CryptoLearnInvest.webp";

const WeServer = () => {
  return (
    <>
      <div className="container xl:max-w-[1218px] lg:px-3 px-6 mx-auto lg:mt-[141px] sm:pt-[80px] pt-12" id="about">
        <div className="flex flex-wrap flex-row justify-between lg:gap-0 sm:gap-8">
          <div className="lg:w-[37%] w-full lg:mt-4" data-aos="fade-right">
            <h4 className="text-[#18191F] xl:text-[48px] lg:text-[35px] md:text-[44px] sm:text-[38px] text-[30px] font-extrabold leading-[133.333%] ff_inter mb-2">
              We serve over 100 Nigerian Websites
            </h4>
            <p className="text-[#18191F] text-[18px] ff_inter font-normal leading-[177.778%]">
              Connect LemonWares with your favourite tools that you use daily
              and keep things on track.
            </p>
          </div>
          <div className="lg:w-[50%] w-full" data-aos="fade-left">
            <div className="flex flex-wrap flex-row lg:justify-end max-sm:justify-between">
              <div className="sm:w-[33%] w-[40%] flex lg:justify-end">
                <img src={JPNL} alt="JPNL" className="max-w-[120px] w-full" />
              </div>
              <div className="sm:w-[33%] w-[40%] flex lg:justify-end">
                <img
                  src={KoraneScents}
                  alt="KoraneScents"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-[33%] w-[40%] flex lg:justify-end">
                <img
                  src={NadineGhaida}
                  alt="NadineGhaida"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-[33%] w-[40%] flex lg:justify-end">
                <img
                  src={LeeveOnBranding}
                  alt="LeeveOnBranding"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-[33%] w-[40%] flex lg:justify-end">
                <img
                  src={JrangoGlasses}
                  alt="JrangoGlasses"
                  className="max-w-[120px] w-full"
                />
              </div>
              <div className="sm:w-[33%] w-[40%] flex lg:justify-end">
                <img
                  src={CryptoLearnInvest}
                  alt="CryptoLearnInvest"
                  className="max-w-[120px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeServer;

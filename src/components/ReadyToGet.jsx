import React, { useState } from "react";
import { TickMark } from "./Icon";

const ReadyToGet = () => {
  const [show, setshow] = useState(true);
  const [tabs, setTabs] = useState(true);
  return (
    <>
      <div className="container xl:max-w-[1121px] mx-auto lg:px-3 px-6 lg:pt-[133px] lg:pb-[105px] sm:py-20 py-12" id="service">
        <h2
          className="text-black text-center ff_poppins font-semibold lg:text-[50px] sm:text-[40px] text-[30px] leading-[120%] lg:max-w-[650px] sm:mb-10 mb-5 mx-auto"
          data-aos="fade-up"
        >
          Ready to get started with Lemon Wares?
        </h2>
        <p
          className="text-center text-black ff_poppins font-normal sm:text-[25px] text-[15px] leading-[100%] "
          data-aos="fade-up"
        >
          Choose the package that suits you
        </p>
        <div
          className="flex sm:gap-8 gap-3 items-center justify-center lg:ml-16 sm:pt-14 pt-[30px] sm:pb-[71px] pb-10"
          data-aos="fade-up"
        >
          <p className="text-black ff_poppins sm:text-[25px] text-[20px] leading-[100%] font-normal">
            Monthly
          </p>
          <div
            onClick={() => setshow(!show)}
            className={`${
              show
                ? "after:translate-x-0 bg-[#B00000]"
                : "sm:after:translate-x-[140%] after:translate-x-[180%] bg-[#FFE87A]"
            } sm:w-[93px] w-[60px] cursor-pointer sm:h-[50px] h-[30px] rounded-[73px] relative after:absolute after:bg-white sm:after:w-[30px] after:w-[15px] sm:after:h-[30px] after:h-[15px] after:rounded-[30px] after:transition-all after:ease-in-out after:duration-500 sm:after:top-2.5 after:top-2 after:bottom-2.5 after:left-[9px]`}
          ></div>
          <div className="flex sm:gap-4 gap-2">
            <p className="text-black ff_poppins font-normal sm:text-[25px] text-[20px] leading-[100%] ">
              Yearly
            </p>
            <button className="text-black ff_poppins text-[10px] leading-[90%] font-medium py-[7px] sm:px-[8px] px-1.5 rounded-[8px] bg-[#FFE87A]">
              20% discount
            </button>
          </div>
        </div>
        <div
          className="flex flex-row max-w-[856px] w-full mx-auto flex-wrap sm:pb-[85px] pb-10"
          data-aos="fade-up"
        >
          <div onClick={() => setTabs(true)} className="w-[50%]">
            <h3 className="text-black cursor-pointer pb-1.5 text-center leading-[133.333%] sm:text-[30px] text-[22px] ff_poppins font-semibold ">
              Basic
            </h3>
            <div
              className={`${
                tabs ? "bg-[#B00000]" : "bg-[#c4c4c4]"
              } h-1 transition-all ease-in-out duration-500`}
            ></div>
          </div>
          <div onClick={() => setTabs(false)} className="w-[50%]">
            <h3 className="text-black cursor-pointer pb-1.5 text-center leading-[133.333%] sm:text-[30px] text-[22px] ff_poppins font-semibold ">
              Premium
            </h3>
            <div
              className={`${
                tabs ? "" : "bg-[#b00000]"
              } h-1 bg-[#C4C4C4] transition-all duration-500 ease-in-out`}
            ></div>
          </div>
        </div>
        <div
          className="flex flex-wrap items-center lg:justify-between justify-center gap-7"
          data-aos="fade-up"
        >
          <div className="border-2 lg:max-w-[299px] md:w-[48%] w-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)inset] cursor-pointer max-md:text-center transition-all ease-linear duration-300 hover:scale-[0.99] rounded-[15px] border-[#C4C4C4] bg-white pt-[34px] pl-[34px] pr-7 pb-11 hover:bg-[#F7FAFE] hover:border-black">
            <p className="text-black ff_poppins text-[28px] leading-[89.286%] font-semibold pb-[11px]">
              Starter
            </p>
            <p className="text-black text-[12px] leading-[150%] ff_poppins font-normal pb-7">
              with all your customers via all conversation channels in one
              central dashboard.
            </p>
            {tabs ? (
              <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                $2.80
              </p>
            ) : (
              <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                $4.80
              </p>
            )}
            {show ? (
              <p className="text-black ff_poppins text-[14px] leading-[100%] font-light pb-[35px]">
                Per month
              </p>
            ) : (
              <p className="text-black ff_poppins text-[14px] leading-[100%] font-light pb-[35px]">
                Per year
              </p>
            )}
            <button className="rounded-[12px] border-[2px] border-solid border-black text-black ff_poppins font-semibold text-[14px] leading-[228.571%] py-[9px] md:w-full px-10 text-nowrap mb-[35px] hover:text-white hover:bg-black transition-all ease-linear duration-500">
              Choose this Plan
            </button>
            <div className="max-md:flex flex-col justify-center items-center">
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-bold flex gap-6">
                  <TickMark />
                  2GB SSD
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  10GB Bandwidth
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  15 Email Accounts
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-bold flex gap-6">
                  <TickMark />
                  Unlimited Database
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />4 Subdomains
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />1 Parked Domain
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />2 Websites
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  Free SSL
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  Softaculous
                </li>
              </ul>
            </div>
          </div>
          <div className="border-2 lg:max-w-[299px] md:w-[48%] cursor-pointer w-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)inset] rounded-[15px] border-[#C4C4C4] bg-white pt-[34px] pl-[34px] pr-7 pb-11 max-md:text-center transition-all ease-linear duration-300 hover:bg-[#F7FAFE] hover:scale-[0.99] hover:border-black">
            <p className="text-black ff_poppins text-[28px] leading-[89.286%] font-semibold pb-[11px]">
              Standard
            </p>
            <p className="text-black ff_poppins text-[12px] leading-[150%] font-normal pb-7">
              with all your customers via all conversation channels in one
              central dashboard.
            </p>
            {tabs ? (
              <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                $4.20
              </p>
            ) : (
              <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                $8.20
              </p>
            )}
            {show ? (
              <p className="text-black ff_poppins text-[14px] leading-[100%] font-light pb-[35px]">
                Per month
              </p>
            ) : (
              <p className="text-black ff_poppins text-[14px] leading-[100%] font-light pb-[35px]">
                Per year
              </p>
            )}
            <button className="rounded-xl border-2 border-black text-black ff_poppins font-semibold text-[14px] leading-[228.571%] py-[9px] md:w-full px-10 text-nowrap mb-[35px] hover:text-white hover:bg-black transition-all ease-linear duration-500">
              Choose this Plan
            </button>
            <div className="max-md:flex flex-col justify-center items-center">
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-bold flex gap-6">
                  <TickMark />
                  2GB SSD
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  10GB Bandwidth
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  15 Email Accounts
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-bold flex gap-6">
                  <TickMark />
                  Unlimited Database
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />4 Subdomains
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />1 Parked Domain
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />2 Websites
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  Free SSL
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  Softaculous
                </li>
              </ul>
            </div>
          </div>
          <div className="border-2 lg:max-w-[299px] md:w-[48%] cursor-pointer w-full shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)inset] rounded-[15px] border-[#C4C4C4] bg-white pt-[34px] pl-[34px] pr-7 pb-11 max-md:text-center transition-all ease-linear duration-300 hover:bg-[#F7FAFE] hover:scale-[0.99] hover:border-black">
            <p className="text-black ff_poppins text-[28px] leading-[89.286%] font-semibold pb-[11px]">
              Suprem
            </p>
            <p className="text-black ff_poppins text-[12px] leading-[150%] font-normal pb-7">
              with all your customers via all conversation channels in one
              central dashboard.
            </p>
            {tabs ? (
              <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                $7.00
              </p>
            ) : (
              <p className="text-black text-[42px] font-semibold leading-[76.19%] ff_poppins pb-[11px]">
                $14.00
              </p>
            )}
            {show ? (
              <p className="text-black ff_poppins text-[14px] leading-[100%] font-light pb-[35px]">
                Per month
              </p>
            ) : (
              <p className="text-black ff_poppins text-[14px] leading-[100%] font-light pb-[35px]">
                Per year
              </p>
            )}
            <button className="rounded-[12px] border-2 border-black text-black ff_poppins font-semibold text-[14px] leading-[228.571%] py-[9px] md:w-full px-10 text-nowrap mb-[35px] hover:text-white hover:bg-black transition-all ease-linear duration-500">
              Choose this Plan
            </button>
            <div className="max-md:flex flex-col justify-center items-center">
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-bold flex gap-6">
                  <TickMark />
                  2GB SSD
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  10GB Bandwidth
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  15 Email Accounts
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-bold flex gap-6">
                  <TickMark />
                  Unlimited Database
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />4 Subdomains
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />1 Parked Domain
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />2 Websites
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  Free SSL
                </li>
                <li className="text-[#808080] ff_inter text-[16px] leading-[150%] font-semibold flex gap-6">
                  <TickMark />
                  Softaculous
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyToGet;

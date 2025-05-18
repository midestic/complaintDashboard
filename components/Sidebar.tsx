"use client";

import { BiHome, BiHomeAlt, BiLogOut } from "react-icons/bi";
import Routes from "./Routes";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FcCloseUpMode } from "react-icons/fc";
import { CgClose } from "react-icons/cg";

let logo = "/images/logo.png";
let infraLogo = "/images/cardinfra.png";

export default function Sidebar() {
  let [nav, setNav] = useState<boolean>(false);

  function togglenav() {
    setNav(!nav);
  }

  console.log(nav);

  return (
    <div className="">
      <div
        className="hidden  max-md:block z-10  fixed w-[40px] h-[40px] font-extrabold 
         justify-center items-center"
        onClick={togglenav}
      >
        {nav ? (
          <p className="text-black  m-0  ">
            <HiOutlineMenu className="w-[50px] h-[50px]" />
          </p>
        ) : (
          <p className="text-black m-0  ">
            <CgClose className="w-[50px] h-[50px]" />
          </p>
        )}
      </div>

      <div className="max-md:fixed ">
        <div
          className={
            nav
              ? "hidden"
              : " w-[auto] max-md:w-[100%] bg-[#002f6c] p-[10px] text-[#D0D5DD] max-md:overflow-y-scroll max-md:h-[100vh] "
          }
        >
          <div className="top-[27px] left-[10px] ">
            <img className="w-[138.32px] h-[45px] " src={logo} alt="logo" />
          </div>

          <div className=" w-[206px] h-[38px] mx-auto  left-[11px] ">
            <div className=" w-[86px] h-[18px] mt-[10px] ml-[12px] gap-12px flex justify-between items-center ">
              <p className="w-[13.33px] h-[13.33px] top-[1.33px] left-[1.33px] ">
                <BiHomeAlt />
              </p>

              <p className=" text-[12px] text-[#D0D5DD] font-[400] ">
                Dashboard
              </p>
            </div>
          </div>

          <div className="w-[auto] h-[18px] top-[157px] left-[28px]  ">
            <p className="font-[500] text-[8.5px] text-[#7E8B9C] ">MAIN MENU</p>
          </div>
          <div className=" w-[206px] h-[668px] left-[11px]  mt-[20px] mx-auto  gap-[4px] flex flex-col">
            <Routes />
          </div>

          <div className="w-[206px] h-[38px] top-[875px] rounded-[8px] ">
            <div className="w-[66px] h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
              <p className="w-[16px] h-[]16px">
                <BiLogOut />{" "}
              </p>
              <p className="font-[500] text-[12px] text-[#FFFFFF] ">Logout</p>
            </div>
          </div>

          <div className="w-[55px] h-[18px] top-[940px] left-[28px]">
            <p className="font-[500] text-[8.5px] text-[#7E8B9C] h ">
              POWERED BY
            </p>
          </div>

          <div className=" w-[auto]] h-[42px] top-[960px] left-[28px] ">
            <img
              className=" w-[100%] h-[100%] object-cover top[20px] "
              src={infraLogo}
              alt="logo"
            />{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

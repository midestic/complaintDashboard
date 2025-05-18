"use client";

import { BiBell, BiUser } from "react-icons/bi";
import { FcDocument } from "react-icons/fc";
import ComplainBox from "./ComplainBox";

export default function Complain() {
  return (
    <div className=" w-[1210px] flex flex-col bg-[#f8fbff] h-[100vh] overflow-y-scroll">
      <div className="w-[auto] h-[48px] bg-[white] border border-b-[1px] px-[10px]  border-[#e8eeed] flex justify-between items-center">
        <div className="w-[206px]   h-[38px] top-[5px] left-[8px] flex justify-start items-center">
          <div className="w-[117px]  flex justify-between  items-center">
            <p className="w-[16px] h-[16px] ">
              <FcDocument />
            </p>
            <p className="font-[500]  text-[12px] ">Complaints: Log</p>
          </div>
        </div>

        <div className="w-[60px] h-[40px]  flex justify-between items-center ">
          <BiBell className="w-[20px] h-[20px]  " />

          <BiUser className="w-[20px] h-[20px]" />
        </div>
      </div>

      <div className="w-[1170px]  mx-auto py-[10px]  border-b-[1px] border-[#e8eeed] ">
        <p className="font-[500] text-[18px] text-[#101828] ">
          Complaints: Log
        </p>
        <p className="font-[400] text-[14px] text-[#475467] ">
          View details of logged complaints and log new ones here
        </p>
      </div>
      <ComplainBox />
    </div>
  );
}

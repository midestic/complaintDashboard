import PR from "@/components/PR";
import { BiBell, BiUser } from "react-icons/bi";
import { FcDocument } from "react-icons/fc";

export default function ComplaintsLog() {
  return (
    <div className="border w-[1210px] h-full flex flex-col  ">
      <div className="w-[auto] h-[48px]  border border-b-[1px]  border-[#e8eeed] flex justify-between items-center">
        <div className="w-[206px]  h-[38px] top-[5px] left-[8px] flex justify-start items-center">
          <div className="w-[117px]  flex justify-between  items-center">
            <p className="w-[16px] h-[16px] ">
              <FcDocument />
            </p>
            <p className="font-[500]  text-[12px] ">Complaints: Log</p>
          </div>
        </div>

        <div className="w-[88px] h-[40px]  flex justify-between items-center ">
          <BiBell className="w-[32px] h-[32px]  " />

          <BiUser className="w-[32px] h-[32px]" />
        </div>
      </div>

      <div className="w-[1170px] h-[63.5px] mx-auto  border-b-[1px] border-[#e8eeed] ">
        <p className="font-[500] text-[18px] text-[#101828] ">
          Complaints: Log
        </p>
        <p className="font-[400] text-[14px] text-[#475467] ">
          View details of logged complaints and log new ones here
        </p>
      </div>
      <PR />
    </div>
  );
}

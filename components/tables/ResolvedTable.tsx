import { BiCalendar, BiSearch } from "react-icons/bi";
import { RiFilterLine } from "react-icons/ri";
import PTable from "../PTable";
import RTable from "../RTable";

export default function ResolvedTable() {
  return (
    <div className="w-[1170px] h-[764px] mx-auto flex flex-col border border-[#EAECF0] rounded-tl-[4px] rounded-tr-[4px]">
      <div className="w-[auto] h-[48px] border border-[#EAECF0] flex justify-between items-center p-[6px] ">
        <div className="w-[320px] h-[36px] flex justify-center items-center">
          <input
            className="border border-[#EAECF0] w-[100%] h-[100%] rounded-[2px] px-[10px] text-[12px] font-[400] text-[#667085]"
            type="text"
            placeholder="search complaint"
          />
        </div>
        <div className="w-[181px] h-[36px] flex justify-between items-center">
          <button className="w-[82px] h-[36px] flex justify-around items-center border border-[#EAECF0] rounded-[4px]">
            <BiCalendar className="w-[20px] h-[20px] text-[#344054]" />
            <p className="font-[500] text-[12px] text-[#344054] m-0 ">Date</p>
          </button>
          <button className="w-[82px] h-[36px] flex justify-around items-center border border-[#EAECF0] rounded-[4px]">
            <RiFilterLine className="w-[20px] h-[20px] text-[#344054]" />
            <p className="font-[500] text-[12px] text-[#344054] m-0 ">Filter</p>
          </button>
        </div>
      </div>
      <RTable />
    </div>
  );
}

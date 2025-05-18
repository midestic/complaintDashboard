"use client";

import { useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import PendingTable from "./tables/PendingTable";
import ResolvedTable from "./tables/ResolvedTable";
import ComplaintModal from "./Modals/ComplaintModal";

export default function PR() {
  let [table, setTable] = useState<any>(<PendingTable />);

  function toPending() {
    setTable(<PendingTable />);
  }

  function toResolved() {
    setTable(<ResolvedTable />);
  }
  return (
    <div>
      <ComplaintModal />

      <div className="w-[1170px] h-[40px] mx-auto flex justify-between items-center mt-[10px] mb-[10px] ">
        <div className="w-[192px] h-[40px] flex justify-between items-center ">
          <div
            onClick={toPending}
            className="w-[103px] cursor-pointer h-[40px] border border-[#D0D5DD] flex justify-center items-center rounded-tl-[8px] rounded-bl-[8px] text-[14px] font-[500] text-[#344054]"
          >
            Pending
          </div>
          <div
            onClick={toResolved}
            className="w-[103px]  cursor-pointer h-[40px] border border-[#D0D5DD] flex justify-center items-center rounded-tr-[8px] rounded-br-[8px] text-[14px] font-[500] text-[#344054]"
          >
            Resolved
          </div>
        </div>
        <button
          className="w-[136px] h-[36px] bg-[#014daf] flex justify-between items-center  py-[8px] px-[14px] rounded-[3px] "
          data-bs-toggle="modal"
          data-bs-target="#complaintModal"
        >
          <FiFilePlus className="w-[14.17px] h-[16.67px]  text-[#FFFFFF] " />
          <p className="font-[500] text-[12px]  text-[#FFFFFF] align-middle m-0 ">
            Log Complaint
          </p>
        </button>
      </div>

      {table}
    </div>
  );
}

import { FiFilePlus } from "react-icons/fi";

export default function ComplaintModal() {
  return (
    <div
      className="modal fade w-[56px] h-[790px] mx-auto  "
      id="complaintModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content px-[20px]">
          {/* div1 */}
          <div className="h-[97px] flex justify-between items-center">
            <div className="flex justify-between items-center border w-[60%]">
              <FiFilePlus className="w-[24px] h-[24px]" />
              <div className="">
                <p className="font-[700] text-[18px] text-[#101828] m-0">
                  Log Complaint
                </p>
                <p className="font-[400] text-[14px]] text-[#475467]">
                  Select category and fill in details
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body border">
            <div className="w-[100%] h-[]66px flex flex-col">
              <p className="font-[500] text-[14px] text-[#344054] ">Category</p>
              <input
                placeholder="Select category from dropdown "
                className="border w-[100%] h-[40px] font-[400] px-[10px]
                 rounded-[6px]
                 text-[16px] text-[#667085]"
                type="text"
                name="catogory"
              />
            </div>

            <div className="w-[100%] h-[]66px flex flex-col mt-[10px]">
              <p className="font-[500] text-[14px] text-[#344054]">
                Account Number*
              </p>
              <input
                placeholder="Select category from dropdown "
                className="border w-[100%] h-[40px] font-[400] px-[10px]
                 rounded-[6px]
                 text-[16px] text-[#667085]"
                type="text"
                name="catogory"
                required
              />
            </div>

            <div className="w-[100%] h-[]66px flex flex-col mt-[10px]">
              <p className="font-[500] text-[14px] text-[#344054]">
                Customer Name*
              </p>
              <input
                placeholder="Select category from dropdown "
                className="border w-[100%] h-[40px] font-[400] px-[10px]
                 rounded-[6px]
                 text-[16px] text-[#667085]"
                type="text"
                name="catogory"
                required
              />
            </div>

            <div className="mt-[10px]">
              <p className="font-[500] text-[14px] text-[#344054]">
                Complaints Details*
              </p>
              <textarea
                className="border w-[100%] h-[100px] text-[16px] rounded-[6px]
                font-[400] px-[10px] py-[10px]"
                placeholder="Describe Complaint"
              ></textarea>
            </div>

            <div className="w-full max-w-md mx-auto">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload File <span className="text-gray-400">(optional)</span>
              </label>

              <div
                className="flex flex-col items-center justify-center border-2 border-dashed
               border-gray-300 rounded-lg px-6 py-10 bg-white text-center cursor-pointer
                hover:border-blue-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-gray-400 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0-9l-3 3m3-3l3 3m-9-6a4 4 0 014-4h1a4 4 0 014 4"
                  />
                </svg>

                <p className="text-sm text-gray-600">
                  <span className="font-medium text-blue-600">
                    Click to upload
                  </span>{" "}
                  or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PDF, JPG (max. 10mb)
                </p>

                <input type="file" className="hidden" />
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="w-[100%] h-[44px] py-[10px] px-[18px] bg-[#014DAF] 
              rounded-[4px] text-[white] font-[700] text-[16px]"
              data-bs-dismiss="modal"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useSearchParams } from "next/navigation";

export default function ComplainBox() {
  let complainParams = useSearchParams();

  let category = complainParams.get("category");
  let accountNumber = complainParams.get("accountNumber");
  let customerName = complainParams.get("customerName");
  let complaint = complainParams.get("complaint");

  console.log(category);
  console.log(complaint);
  console.log(customerName);

  return (
    <div
      className="w-[1170px] h-[714px] mx-auto bg-white p-[10px]
    rounded-[10px] border"
    >
      <p className="font-[500] text-[18px] text-[#121212] m-0">
        Complaint Details
      </p>

      <div className="w-[1002px] flex justify-between items-start mt-[10px] flex-wrap ">
        <div className="w-[448px] h-[70px] ">
          <p className="font-[500] text-[14px] text-[#344054] m-0 ">
            Complaint Category
          </p>
          <div
            className="w-[100%] p-[10px] border rounded-[8px] text-[16px]
          text-[#101828] font-[400] flex justify-start items-center mt-[5px]
           bg-[#f5f5f7]"
          >
            {category}
          </div>
        </div>

        <div className="w-[448px] h-[70px] ">
          <p className="font-[500] text-[14px] text-[#344054] m-0 ">Branch</p>
          <div
            className="w-[100%] p-[10px] border rounded-[8px] text-[16px]
          text-[#101828] font-[400] flex justify-start items-center mt-[5px]
           bg-[#f5f5f7]"
          >
            Head Office
          </div>
        </div>

        <div className="w-[448px] h-[70px] mt-[30px] ">
          <p className="font-[500] text-[14px] text-[#344054] m-0 ">
            Account Number
          </p>
          <div
            className="w-[100%] p-[10px] border rounded-[8px] text-[16px]
          text-[#101828] font-[400] flex justify-start items-center mt-[5px]
           bg-[#f5f5f7]"
          >
            {accountNumber}
          </div>
        </div>

        <div className="w-[448px] h-[70px] mt-[30px] ">
          <p className="font-[500] text-[14px] text-[#344054] m-0 ">
            Customer Name
          </p>
          <div
            className="w-[100%] p-[10px] border rounded-[8px] text-[16px]
          text-[#101828] font-[400] flex justify-start items-center mt-[5px]
           bg-[#f5f5f7]"
          >
            {customerName}
          </div>
        </div>

        <div className="w-[1002px] mt-[30px]">
          <p className="font-[500] text-[14px] text-gray-700">
            Complaint Details
          </p>

          <div
            className=" border w-[100%] h-[100px] bg-[#f5f5f7] font-[400]
            text-[16px] text-gray-900 p-[10px]
           rounded-[8px]"
          >
            {complaint}
          </div>
        </div>
      </div>

      <div
        className="w-[800px] p-[10px]  mt-[30px] flex justify-between
      items-start"
      >
        <div className="w-[151px] h-auto flex flex-col">
          <div className="w-[100%]">
            <p className="font-[500] text-[14px] text-[#344054] m-0 ">
              Submission Date
            </p>
            <span className="font-[400] text-[16px] text-[#101828] ">
              11/14/2024
            </span>
            <span className="ml-[10px] font-[400] text-[16px] text-[#101828] ">
              10:27:43
            </span>
          </div>

          <div className="mt-[40px]">
            <p className=" font-[500] text-[14px] text-[#344054] m-0">
              Resolved By
            </p>
            <p className="font-[400] text-[16px] text-[#101828] ">Manager</p>
          </div>

          <div className="mt-[40px]">
            <p className="font-[500] text-[14px] text-[#344054] m-0 ">
              Resolution Date
            </p>
            <span className="font-[400] text-[16px] text-[#101828] ">
              11/14/2024
            </span>
            <span className="ml-[10px] font-[400] text-[16px] text-[#101828] ">
              10:27:43
            </span>
          </div>
        </div>

        <div>
          <div className="w-[100px] ">
            <p className="font-[500] text-[14px] text-[#344054] m-0 ">Status</p>
            <span
              className="border w-[100px]  bg-[#ABEFC6] text-[16px]
         text-[#067647] px-[12px] py-[4px] font-[500] rounded-[16px]
         flex justify-center items-center mt-[15px]"
            >
              Resolved
            </span>
          </div>

          <div className="mt-[20px]">
            <p className="m-0 text-[14px] font-[500] text-[#344054]">
              Attachment
            </p>
            <p className="m-0 font-[400] text-[16px] text-[#101828] ">None</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import { BiCreditCard, BiMap } from "react-icons/bi";
import { BsCreditCard2Back } from "react-icons/bs";
import { CgCreditCard, CgList } from "react-icons/cg";
import { FaUserShield } from "react-icons/fa";
import { FaIcons, FaUserGroup } from "react-icons/fa6";
import { FcDocument } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { MdPassword } from "react-icons/md";
import { TbBrandCrunchbase, TbCreditCardRefund } from "react-icons/tb";
import { TiChartBarOutline } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";

export default function Routes() {
  return (
    <>
      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <TbBrandCrunchbase />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] "> Branches</p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <FaUserShield />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] "> Roles</p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <FaUserGroup />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] "> Users</p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <FiSettings />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] ">Card Scheme</p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <BiCreditCard />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] ">
            {" "}
            Card Profile
          </p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <BsCreditCard2Back />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] ">
            {" "}
            Card Request
          </p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <TiChartBarOutline />
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] "> Stock</p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <CgCreditCard />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] "> Cards</p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <TbCreditCardRefund />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] ">
            {" "}
            Block/Unblock Card
          </p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <MdPassword />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] ">
            {" "}
            Generate/Reissue Pin
          </p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <FcDocument />{" "}
          </p>
          <Link href="/">
            <p className=" font-[400] text-[12px] text-[#D0D5DD] ">
              Complaints: Log
            </p>
          </Link>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <CgList />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] ">
            {" "}
            Authorization List
          </p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <FaIcons />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] ">
            {" "}
            Authorization Queue
          </p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <BiMap />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] "> Trail</p>
        </div>
      </div>

      <div className="w-[206px] h-[38px] rounded-[8px] ">
        <div className="w-fit h-[18px] top-[10px] left-[12px] gap-[12px] flex justify-between items-center">
          <p className=" w-[16px] h-[16px]">
            <VscAccount />{" "}
          </p>
          <p className=" font-[400] text-[12px] text-[#D0D5DD] "> Account</p>
        </div>
      </div>
    </>
  );
}

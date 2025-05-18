import { BiHome, BiHomeAlt, BiLogOut } from "react-icons/bi";
import Routes from "./Routes";

let logo = "/images/logo.png";
let infraLogo = "/images/cardinfra.png";

export default function Sidebar() {
  return (
    <div className="w-[100%] h-full bg-[#002f6c] p-[10px]  text-[#D0D5DD] ">
      <div className="top-[27px] left-[10px] ">
        <img className="w-[138.32px] h-[45px] " src={logo} alt="logo" />
      </div>

      <div className=" w-[206px] h-[38px] mx-auto  top-[103px] left-[11px] ">
        <div className=" w-[86px] h-[18px] mt-[10px] ml-[12px] gap-12px flex justify-between items-center ">
          <p className="w-[13.33px] h-[13.33px] top-[1.33px] left-[1.33px] ">
            <BiHomeAlt />
          </p>

          <p className=" text-[12px] text-[#D0D5DD] font-[400] ">Dashboard</p>
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
        <p className="font-[500] text-[8.5px] text-[#7E8B9C] h ">POWERED BY</p>
      </div>

      <div className=" w-[auto]] h-[42px] top-[960px] left-[28px] ">
        <img
          className=" w-[100%] h-[100%] object-cover top[20px] "
          src={infraLogo}
          alt="logo"
        />{" "}
      </div>
    </div>
  );
}

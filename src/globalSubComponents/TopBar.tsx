// Dependencies
import { Button } from "@nextui-org/react";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="flex bg-[#04233b] py-[0.5rem]">
      <Button
        variant="light"
        radius="sm"
        className="w-full px-[8px] py-[10px] text-[1rem] text-white"
        startContent={<IoCallSharp />}
      >
        Call : +1 (888) 891-7176
      </Button>
      <Button
        variant="light"
        radius="sm"
        className="w-full px-[8px] py-[10px] text-[1rem] text-white"
        startContent={<IoMdMail />}
      >
        Email : carint@gmail.com
      </Button>
      <Button
        variant="light"
        radius="sm"
        className="w-full px-[8px] py-[10px] text-[1rem] text-white hidden md:flex"
        startContent={<FaLocationDot />}
      >
        Port Charlotte, Florida, USA
      </Button>
    </div>
  );
};

export default TopBar;

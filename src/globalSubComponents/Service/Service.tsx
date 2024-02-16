import React from "react";
import Cards from "./SubComponent/Cards";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaTrainSubway } from "react-icons/fa6";
import { GiCargoShip } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";


const content = [
  {
    title: "AIR TRANSPORT",
    des: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
    pic: GiCommercialAirplane,
  },
  {
    title: "CARGO TRANSPORT",
    des: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    pic: GiCargoShip,
  },
  {
    title: "TRUCKS TRANSPORT",
    des: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using",
    pic: FaTruckFast,
  },
  {
    title: "TRAIN TRANSPORT",
    des: "fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using ",
    pic: FaTrainSubway,
  },
];
const Service = () => {
  return (
    <>
      <div className="flex flex-col justify-center lg:items-start items-center h-auto w-auto gap-2 px-[2rem] md:px-[6rem]">
        <div>
          <h1 className="font-bold  text-4xl ">
            Our <span className="text-[#0a97b0] md:text-start text-center">Services</span>
          </h1>
        </div>
        <div className="py-[1rem]">
          <p className=" font-normal lg:text-start text-center text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
      </div>
      <div className="md:px-[6rem]  px-[2rem] py-[2rem] xl:grid xl:grid-cols-2 gap-4 xl:gap-x-2 xl:gap-y-7 flex flex-col justify-center lg:items-start items-center">
        {content.map((e, i) => (
          <Cards key={i} title={e.title} des={e.des} photo={e.pic} />
        ))}
      </div>
    </>
  );
};

export default Service;

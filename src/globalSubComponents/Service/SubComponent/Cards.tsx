import { CardProps } from "@nextui-org/react";
import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";

type cardsProps = {
  photo: any;
  title: string;
  des: string;
};

const Cards = (props:cardsProps) => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center bg-gray-200  h-auto md:w-[35rem] w-auto border-2 border-blue-500 p-[3rem] md:p-[0rem]">
      <div className="px-[1.5rem] ">{<props.photo className=" h-[5rem] w-[5rem] text-black" />}</div>
      <div className="flex flex-col justify-center md:items-start items-center gap-2 ">
        <div className="md:p-[0.5rem]">
          <h1 className="font-bold  md:text-start text-center text-blue-500 text-[1.2rem]">{props.title}</h1>
        </div>
        <div className="md:px-[0.5rem]">
          <p className="text-1xl font-normal  md:text-start text-center">{props.des}</p>
        </div>
        <div className="md:p-[0.5rem] ">
          <button className="text-[1.2rem] font-medium text-gray-800 ">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

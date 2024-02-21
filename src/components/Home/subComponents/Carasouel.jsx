import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";

const element = [
  {
    id: 1,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur reiciendis asperiores? Numquamquisquam illum nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel ratione temporeplaceat tempora!. nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel rationetempore placeat tempora!.",
    pic: "https://img.freepik.com/free-photo/medium-shot-man-posing-studio_23-2151038507.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated",
    name: "Adipicing",
    author: "Magna",
  },

  {
    id: 1,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur reiciendis asperiores? Numquamquisquam illum nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel ratione temporeplaceat tempora!. nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel rationetempore placeat tempora!.",
    pic: "https://img.freepik.com/free-photo/medium-shot-man-posing-studio_23-2151038507.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated",
    name: "Adipicing",
    author: "Magna",
  },

  {
    id: 1,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur reiciendis asperiores? Numquamquisquam illum nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel ratione temporeplaceat tempora!. nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel rationetempore placeat tempora!.",
    pic: "https://img.freepik.com/free-photo/medium-shot-man-posing-studio_23-2151038507.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated",
    name: "Adipicing",
    author: "Anish",
  },

  {
    id: 1,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur reiciendis asperiores? Numquamquisquam illum nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel ratione temporeplaceat tempora!. nostrum fuga aspernatur quia id, voluptate assumenda, deserunt error vitae vel rationetempore placeat tempora!.",
    pic: "https://img.freepik.com/free-photo/medium-shot-man-posing-studio_23-2151038507.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated",
    name: "Adipicing",
    author: "Manish",
  },
];

const Carasouel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      setActiveIndex(element.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % element.length);
  };

  return (
    <>
      <div className="flex h-auto w-1/2   flex-col items-start  justify-between md:px-[4rem] px-[1rem] ">
        <div className="font-bold  md:text-4xl text-3xl px-[2rem] py-[2rem]">
          <h1>
            What Says Our <span className="text-[#0a97b0]">Clients</span>
          </h1>
        </div>
        {element.map((e, i) => (
          <div
            className={
              "flex md:flex-row flex-col items-center  justify-between gap-[5rem] object-contain  " +
              (activeIndex === i ? "block" : "hidden")
            }
          >
            <div
              className={
                "flex flex-col items-start justify-between object-contain " + (activeIndex === i ? "block" : "hidden")
              }
            >
              <div
                className={
                  " lg:w-[28rem] sm:w-[20rem] w-auto p-[2rem] border-2 " + (activeIndex === i ? "block" : "hidden")
                }
              >
                <p>{e.des}</p>
              </div>
              <div className="flex flex-row items-center justify-start gap-3 px-[2rem] py-[2rem]">
                <div className={activeIndex === i ? "block" : "hidden"}>
                  <img className="w-[5rem] h-[5rem] rounded-full" src={e.pic} alt="" />
                </div>
                <div className={activeIndex === i ? "block" : "hidden"}>
                  <h2>{e.name}</h2>
                  <h3>{e.author}</h3>
                </div>
              </div>
            </div>

            <div
              className={
                " flex-col items-start justify-between object-contain lg:inline-block hidden  " +
                (activeIndex === i ? "block" : "hidden")
              }
            >
              <div className={" lg:w-[28rem] w-[20rem] p-[2rem] border-2 " + (activeIndex === i ? "block" : "hidden")}>
                <p>{e.des}</p>
              </div>
              <div className="flex flex-row items-center justify-start gap-3 px-[2rem] py-[2rem]">
                <div className={activeIndex === i ? "block" : "hidden"}>
                  <img className="w-[5rem] h-[5rem] rounded-full" src={e.pic} alt="" />
                </div>
                <div className={activeIndex === i ? "block" : "hidden"}>
                  <h2>{e.name}</h2>
                  <h3>{e.author}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex flex-col relative items-center justify-center ">
          <div className="py-[1rem] px-[2rem] absolute xl:bottom-[16rem] xl:left-[64rem] lg:left-[26.5rem] lg:bottom-[15rem]  bottom-[20rem] sm:left-[22rem] left-[13rem]">
            <button
              onClick={handleNextClick}
              className=" bg-blue-500 py-[0.5rem] px-[1rem] text-white text-4xl text-center"
            >
              <GrFormNextLink />
            </button>
          </div>
          <div className="py-[1rem] px-[2rem] absolute xl:bottom-[12rem] xl:left-[64rem] lg:left-[26.5rem] lg:bottom-[10rem] bottom-[16rem] sm:left-[22rem] left-[13rem]">
            <button
              onClick={handlePrevClick}
              className="  bg-blue-500 py-[0.5rem] px-[1rem] text-white text-4xl text-center"
            >
              <GrFormPreviousLink />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carasouel;

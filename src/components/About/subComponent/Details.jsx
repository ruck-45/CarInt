import React from "react";

const Details = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-evenly md:p-[5rem] p-[2rem] gap-10">
      {/* content */}
      <div className="flex flex-col justify-center items-start">
        <div className="py-[2rem]">
          <h1 className=" font-bold text-4xl text-[#0a97b0]">
            About <span className="text-gray-700">Us</span>
          </h1>
        </div>
        <div className="py-[1rem] ">
          <p className="text-gray-600  font-normal ">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
        </div>
        <div className="py-[1rem] ">
          <button className="py-[1rem] px-[2rem] bg-[#0a97b0] text-white">Read More</button>
        </div>
      </div>

      {/* photo */}
      <div className="">
        <div>
          <img
            className="w-[100rem] h-[20rem]"
            src="https://img.freepik.com/free-photo/container-truck-ship-port-business-logistics-transportation-container-cargo-ship_587448-4886.jpg?size=626&ext=jpg&uid=R135143294&ga=GA1.1.605707501.1697708835&semt=ais_ai_generated"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Details;

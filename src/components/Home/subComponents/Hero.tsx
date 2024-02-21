// Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

const features = [
  {
    heading: "WE PROVIDE BEST TRANSPORT SERVICE",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?",
  },
  {
    heading: "WE PROVIDE BEST TRANSPORT SERVICE",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?",
  },
  {
    heading: "WE PROVIDE BEST TRANSPORT SERVICE",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?",
  },
];

const Hero = () => {
  var settings: Settings = {
    
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    arrows: false,
    dots: true,

    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "-4px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          borderRadius: "100%",
          backgroundColor: "white",
          height: "1rem",
          width: "1rem",
          color: "",
        }}
      >
        {}
      </div>
    ),
  };

  return (
    <div
      className="px-[1rem] sm:px-[3rem] py-[5rem] min-h-[35rem] bg-no-repeat bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.5)),url(https://images.unsplash.com/photo-1473042904451-00171c69419d?q=80&w=1799&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <Slider {...settings}>
        {features.map((data, index) => (
          <div className="px-[1rem]">
            <div className="bg-transparent rounded-3xl p-[2rem] flex gap-[2rem] text-white">
              <div className="flex flex-col gap-[1rem]">
                <div className="max-w-[23rem] md:max-w-[30rem] flex flex-col gap-[1rem]">
                  <h1 className="text-[2rem] leading-[2rem] font-bold text-center sm:text-left">{data.heading}</h1>
                  <p className="text-justify text-sm">{data.description}</p>
                  <Button
                    variant="shadow"
                    color="primary"
                    radius="none"
                    endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
                    className="max-w-[10rem] self-center sm:self-start"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

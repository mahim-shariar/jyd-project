import React from "react";
import "../style/Banner.css";
import Image from "next/image";
import banner_image from "../assets/Banner.png";
import { Button } from "@nextui-org/react";

const Banner = () => {
  return (
    <div id="home" className="image-bg min-h-screen">
      <div className="overlay ">
        <div className="flex items-center gap-10">
          <div className="glassy-bg">
            {/* Experience Badge */}
            <div className="experience-badge">
              <div className="bg-[#232323] bg-color py-3 px-5 rounded-tr-md rounded-bl-md shadow-md flex flex-col justify-center ">
                <h1 className="text-4xl flex items-center justify-center text-white">
                  1 <span className="text-[#00dbdb] text-2xl ml-1"> + </span>
                </h1>
                <h2 className="text-sm text-[#00dbdb] text-center">
                  Years Experience
                </h2>
              </div>
            </div>

            {/* Main Image */}
            <Image
              src={banner_image}
              alt="Banner"
              width={360}
              height={360}
              className="main-image"
            />
          </div>
          <div className="flex flex-col justify-evenly h-full">
            <h1 className="text-lg text-[#00dbdb]  font-thin">
              {" "}
              WELCOME TO JYD STUDIO{" "}
            </h1>
            <h1
              className="text-6xl py-5 text-white font-extrabold "
              style={{ lineHeight: "66px" }}
            >
              LET'S <span className="text-[#00dbdb] "> MAKE </span> YOUR <br />{" "}
              VIDEO LOOKS <br />
              MORE <span className="text-[#00dbdb] "> COOL </span>
            </h1>
            <p className=" text-[#ffffff] font-thin text-small">
              I'm a Video Editor with 1 year of experience. I can make your
              video looks more cool.
            </p>
            <Button
              className=" bg-transparent text-white w-32 text-lg  border-3 border-[#00dbdb]  my-5"
              radius="none"
            >
              {" "}
              Contact US{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

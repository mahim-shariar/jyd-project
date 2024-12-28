import Image from "next/image";
import React from "react";
import aboutme from "../assets/about-me.jpg";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="my-20 px-10 flex justify-center items-center gap-8"
    >
      <div>
        <h1 className="text-lg text-[#00dbdb]  font-thin"> STARTED 2023</h1>
        <h1
          className="text-4xl py-5 text-white font-extrabold "
          style={{ lineHeight: "66px" }}
        >
          HELLO, IM JAYED TALUKDER
        </h1>
        <p className="text-[#999999] text-sm mb-5">
          I am a video editor and a motion designer from Bangladesh. <br /> I
          have been working in the field for 1 year. I have a passion for
          creating <br /> visually stunning and engaging videos. I am always
          looking for new and innovative ways to bring my clients' <br /> ideas
          to life.
        </p>

        <p className="text-white text-lg">
          {" "}
          "My passion is to create engaging and visually stunning videos for my
          clients. "{" "}
        </p>

        <p className="text-white text-lg mt-5"> JAYED TALUKDER </p>

        <p className="text-[#00dbdb] text-sm">VIDEO EDITOR</p>
      </div>
      <div>
        <Image src={aboutme} alt="about" width={500} height={500} />
      </div>
    </div>
  );
};

export default AboutMe;

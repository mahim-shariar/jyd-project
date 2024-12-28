"use client";
import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import MyWork from "@/components/MyWork";
import Review from "@/components/Review";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MyWork />
      <AboutMe />
      <Review />
      <Contact />
    </div>
  );
}

import React from "react";
import Navbar from "../Navbar";
import styles from "./HeroSection.module.scss";
import scrollIndicator from "@/assets/images/scrollIndicator.png";
import arrowDownIcon from "@/assets/images/arrow-down.png";
import About from "../About";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Navbar />
      <div className="relative h-[calc(100vh_-_43px)] z-[1000] flex flex-col justify-between">
        <h1 className="max-w-[1000px] text-[80px] m-0 p-0 mt-12.5 font-extralight pt-14">
          Full stack developer who loves building things on the internet
        </h1>
        <div className="flex">
          <div className="relative flex items-center justify-between pr-2.5">
            <p className="font-['inter'] max-w-[400px] opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              viverra, dui vel fermentum congue, metus turpis fermentum sapien,
              vitae tempor leo libero vitae nisi. Pellentesque tempor ac
            </p>
          </div>
          <div className="right-0 bottom-1 absolute w-[150px]">
            <div className="relative w-[100px]">
              <img
                src={scrollIndicator}
                className="w-full animate-[rotate_5s_linear_infinite]"
                alt="scroll indicator"
              />
              <img
                src={arrowDownIcon}
                alt="arrow icon"
                className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-6 "
              />
            </div>
          </div>
        </div>
      </div>
      <About />
    </section>
  );
};

export default HeroSection;

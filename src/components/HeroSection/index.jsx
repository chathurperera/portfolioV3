import React from "react";
import Navbar from "../Navbar";
import styles from "./HeroSection.module.scss";
import scrollIndicator from "@/assets/images/scrollIndicator.png";
import arrowDownIcon from "@/assets/images/arrow-down.png";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <Navbar />
      <div className={styles.container}>
        <h1>Full stack developer who loves building things on the internet</h1>
        <div className={styles.bottom}>
          <p className="font-['inter']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            viverra, dui vel fermentum congue, metus turpis fermentum sapien,
            vitae tempor leo libero vitae nisi. Pellentesque tempor ac
          </p>
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollIndicatorWrapper}>
              <img src={scrollIndicator} alt="scroll indicator" />
              <img src={arrowDownIcon} alt="arrow icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

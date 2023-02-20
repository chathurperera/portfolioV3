import React from "react";
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
  return (
    <section className={styles.workSection}>
      <div className={styles.marquee}>
        <div className={styles.marquee__group}>
          <p>Work</p>
          <p>Work</p>
          <p>Work</p>
          <p>Work</p>
          <p>Work</p>
          <p>Work</p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;

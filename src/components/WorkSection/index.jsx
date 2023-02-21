import React from "react";
import RecentProject from "../RecentProject";
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
      <div className={styles.subtitle}>Recent work</div>
      <RecentProject />
    </section>
  );
};

export default WorkSection;

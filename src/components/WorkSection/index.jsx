import React from "react";
import ArchivedProject from "../ArchivedProject";
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
      <div id={styles.cards} >
        <RecentProject top={0}/>
        <RecentProject top={75}/>
        <RecentProject top={150}/>
        <RecentProject top={0}/>
        {/* <RecentProject top={175}/> */}
      </div>
      <ArchivedProject />
      <ArchivedProject />
      <ArchivedProject />
      <ArchivedProject />
    </section>
  );
};

export default WorkSection;

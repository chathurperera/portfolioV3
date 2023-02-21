import React from "react";
import styles from "./RecentProject.module.scss";
import mockup from "../../assets/images/image 7.png";
import linkIcon from "../../assets/images/linkArrow.svg";

const RecentProject = () => {
  return (
    <div className={styles.recentProject}>
      <div className={styles.mockup}>
        <div className={styles.mockupHead}>
          <div className={styles.count}>01</div>
          <p>Alixs</p>
        </div>
        <img src={mockup} alt="" />
      </div>
      <div className={styles.details}>
        <div className={styles.detailsHead}>
          2022
          <div className={styles.icons}>
            <img src={linkIcon} className={styles.linkIcon} alt="" />
          </div>
        </div>
        <h4>
          A complete brand guide a new digital universe for the guys at Alexis.
          Dark, bold and powerful.
        </h4>
      </div>
    </div>
  );
};

export default RecentProject;

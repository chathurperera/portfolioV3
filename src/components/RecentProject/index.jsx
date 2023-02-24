import React from "react";
import styles from "./RecentProject.module.scss";
import mockup from "../../assets/images/image 7.png";
import linkIcon from "../../assets/images/linkArrow.svg";

const RecentProject = () => {
  const demoArray = new Array(6).fill(0);

  return (
    <div className="grid  gap-[20px] text-[#010203]">
      <div className="col-span-3 ">
        <div className="flex flex">
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
        <div className="">
          <p className="text-4xl mt-7">
            With this ecommerce application I have used the MERN stack and
            implemented authorization with JSONwebtokens. Users have the option
            to filter out product lists according to their purchasing
            preferences.
          </p>
          <div className="mt-5 flex align-middle gap-1">
            {demoArray.map((num) => (
              <div className="rounded-full text-[#c2bfbf] border-2 border-slate-700 border-solid py-1 p-2">
                React js
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProject;

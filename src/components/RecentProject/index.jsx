import React from "react";
import styles from "./RecentProject.module.scss";
import mockup from "../../assets/images/image 7.png";
import linkIcon from "../../assets/images/linkArrow.svg";

const RecentProject = () => {
  const demoArray = new Array(6).fill(0);

  return (
    <div className="grid grid-cols-5 gap-[20px] text-[#010203] mb-12">
      <div className="col-span-2">
        <div className="flex items-end justify-center  relative">
          <div className="absolute text-[30px] left-0 bottom-[15px]">01</div>
          <p className="text-[50px] m-0 py-[10px] px-0">Alixs</p>
        </div>
        <img src={mockup} className="w-full" alt="mock up" />
      </div>
      <div className="col-span-3">
        <div className="flex justify-between items-end pt-3">
          2022
          <div>
            <img
              src={linkIcon}
              className="w-[50px] -rotate-45 hover:cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="text-4xl mt-7">
            With this ecommerce application I have used the MERN stack and
            implemented authorization with JSONwebtokens. Users have the option
            to filter out product lists according to their purchasing
            preferences.
          </p>
          <div className="mt-5 flex align-middle gap-2">
            {demoArray.map((num) => (
              <div className="rounded-full text-[#888888] border-[1px] border-slate-700 border-solid py-1 p-2">
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

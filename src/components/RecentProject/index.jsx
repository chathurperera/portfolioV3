import React from "react";
import styles from "../WorkSection/WorkSection.module.scss";
import mockup from "../../assets/images/image 7.png";
import linkIcon from "../../assets/images/linkArrow.svg";

const RecentProject = () => {
  const demoArray = new Array(6).fill(0);

  return (
    <div
      className="grid grid-cols-5 gap-[20px] text-[#010203] border-solid 
    border-[#0000001a] border-t-[1px] mb-5 pt-2"
    >
      <div className="col-span-2">
        <div className="flex items-end justify-center  relative">
          <div className="absolute text-[30px] left-0 bottom-[15px] pl-5">
            01
          </div>
          <p className="text-[50px] m-0 py-[10px] px-0">Alixs</p>
        </div>
        <div className="p-6">
          <img src={mockup} className="w-full" alt="mock up" />
        </div>
      </div>
      <div className="col-span-3">
        <div className="flex justify-between items-end pt-3">
          2022
          <div className="pr-2">
            <img
              src={linkIcon}
              className="w-[50px] -rotate-45 hover:cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="text-3xl mt-7 pr-4">
            With this ecommerce application I have used the MERN stack and
            implemented authorization with JSONwebtokens. Users have the option
            to filter out product lists according to their purchasing
            preferences.
            
          </p>
          <div className="mt-5 flex align-middle gap-2">
            {demoArray.map((num) => (
              // box-shadow: rgba(0, 0, 0, 0.157) 0px 1px 4px;
              <div
                className="
               rounded-full text-[#888888]   text-[.75rem] font-thin border-[1px] 
               border-solid shadow-[0px_1px_4px_rgba(0, 0, 0, 0.157)] py-1 p-2 hover:bg-[#fafafa] hover:cursor-default  "
              >
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

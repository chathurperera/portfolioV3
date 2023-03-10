import React from "react";
// import image from '../../assets/images/image 7.png'
const ArchivedProject = () => {
  return (
    <div className="grid grid-cols-3 py-6 border-y-[1px] border-[#1c1d202d] items-center">
      <div className="text-[#010203] text-[1.6rem] pr-[10px]">
        California Ecommerce website
      </div>
      
      <div className="text-[#0102037e]">
        React.js / Node.js / Express.js / MongoDB / Tailwind CSS /JWT / Redux /
        Sass / AWS
      </div>
      <div className="text-center align-center ">
        <a href="" className="no-underline text-[1.2rem] text-[#010203] mr-5 hover:underline">Live site</a>
        <a href="" className="no-underline text-[1.2rem] text-[#010203] hover:underline">Source code</a>
      </div>
    </div>
  );
};

export default ArchivedProject;

import React from "react";

const SocialMediaPill = ({ linkText, link }) => {
  return (
    <div className="border-[#f1f1f12d] border-[1px] py-1 px-2.5 cursor-pointer hover:opacity-60 hover:transition-all hover:ease-in-out rounded-full  ">
      <a href={link} className="font-[200] font-['inter'] text-[14px] ">
        {linkText}
      </a>
    </div>
  );
};

export default SocialMediaPill;

import React from "react";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 -z-10 p-9 py-16 flex justify-center flex-col align-middle">
      <div className="text-center">
        <h2 className="text-[80px] font-[100]">Let's work together</h2>
        <p className="font-[200] font-['Inter'] text-[20px] mt-5">Contact me</p>
        <a href="#" className="font-['Inter'] text-[20px]">chathurapereraaa@gmail.com</a>
      </div>
      <div className="flex align-middle gap-3 justify-center mt-16">
        <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full">
          <a href="#" className="font-[200] font-['inter']">LINKEDIN</a>
        </div>
        <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full">
          <a href="#" className="font-[200] font-['inter']">GITHUB</a>
        </div>
        <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full">
          <a href="#" className="font-[200] font-['inter']">TWITTER</a>
        </div>
        <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full">
          <a href="#" className="font-[200] font-['inter']">INSTARGRAM</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

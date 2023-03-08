import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 -z-10 h-96 p-9 py-16 flex justify-center flex-col align-middle border">
    
      <div className="border border-yellow">
        <div className="text-center">
          <h2 className="text-[80px] font-[100]">Let's work together</h2>
          <p className="font-[200] font-['Inter'] text-[20px] mt-5">
            Contact me
          </p>
          <a href="#" className="font-['Inter'] text-[20px]">
            chathurapereraaa@gmail.com
          </a>
        </div>
        <div className="flex align-middle gap-3 justify-center mt-16 hover:bg-slate-50 border-[1px] bg-slate-600 w-full ">
          <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full ">
            <a href="#" className="font-[200] font-['inter']">
              LINKEDIN
            </a>
          </div>
          <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full ">
            <a href="#" className="font-[200] font-['inter']">
              GITHUB
            </a>
          </div>
          <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full ">
            <a href="#" className="font-[200] font-['inter']">
              TWITTER
            </a>
          </div>
          <div className="border-[#f1f1f12d] border-[1px] py-1 px-2  rounded-full ">
            <a href="#" className="font-[200] font-['inter']">
              INSTARGRAM
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

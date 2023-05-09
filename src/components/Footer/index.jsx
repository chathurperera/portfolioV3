import React from "react";
import SocialMediaPill from "./components/SocialMediaPill";

const Footer = () => {
  const LINKTEXT = ["GITHUB", "LINKEDIN", "INSTARGRAM", "TWITTER"];

  return (
    <footer className="fixed bottom-0 z-0 w-full p-9 py-16 flex justify-center flex-col align-middle ">
      <div className=" border-yellow">
        <div className="text-center">
          <h2 className="text-[80px] font-[100]">Let's work together</h2>
          <p className="font-[200] font-['Inter'] text-[20px] mt-5">
            Contact me
          </p>
          <a href="#" className="font-['Inter'] text-[20px]">
            chathurapereraaa@gmail.com
          </a>
        </div>
        <div className="flex align-middle gap-3 justify-center mt-16  w-full ">
          {LINKTEXT.map((link) => (
            <SocialMediaPill linkText={link} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

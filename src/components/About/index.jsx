import React from "react";
import Avatar from "../../assets/images/avatar.png";

const About = () => {
  return (
    <section className="my-0 mx-auto max-w-[2000px]  pt-20">
      {/* <div className="flex items-center gap-2 mb-5">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <span>About</span>
      </div> */}
      <div className="flex items-center ">
        <div className="flex-1">
          <p className="text-[30px] font-extralight">
            Hi Im chathura , I'm a full stack developer with a passion for
            solving problems through interactive web experiences.
          </p>
          <p className="text-[#ffffff59] mt-6">
            I'm a self-taught developer with experience in developing new
            features from ideation to production, implementation of wireframes
            and design flows into high-performance web applications. I take into
            consideration the user experience while writing reusable and
            efficient code.
          </p>
          <p className="mt-4">Checkout my resume</p>
        </div>
        <div className="flex-1">
          <div className="max-w-lg text-center mx-auto">
            <img src={Avatar} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

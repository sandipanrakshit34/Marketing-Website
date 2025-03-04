import React from "react";
import Accordian from "./Accordian";

const Faquestions = () => {
  return (
    // <div className="grid md:grid-cols-2 gap-x-10 md:gap-y-5 gap-y-3 mx-5 lg:mx-0">
    <>
      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"What is WorkStation?"}
          answer={
            "Workstation is a Digital Marketing Agency that provides a range of services, including social media marketing, web development, graphic designing, and video production. We help businesses grow by enhancing their online presence and brand engagement."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"How can Workstation help my business grow?"}
          answer={
            "Workstation uses data-driven digital marketing strategies, creative content, and advanced web solutions to enhance your brand’s online visibility, increase customer engagement, and drive business growth."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0">
        <Accordian
          question={"Is Workstation recognized by any organizations?"}
          answer={
            "Yes! Workstation is officially recognized by StartupIndia and MSME, which validates our commitment to providing high-quality and innovative digital solutions."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Who are Workstation's clients?"}
          answer={
            "We work with startups, small businesses, and established brands looking to scale their digital reach, improve brand engagement, and maximize online presence."
          }
        />
        </div>
      </div>

      <div className="md:flex w-full md:gap-5 mb-5">
        <div className="md:w-1/2 mb-2 md:mb-0 ">
        <Accordian
          question={"Why should I choose Workstation over other agencies?"}
          answer={
            "Workstation stands out due to its innovative digital strategies, personalized approach, and commitment to delivering impactful results. Our recognition by StartupIndia and MSME ensures credibility and quality service."
          }
        />
        </div>

        <div className="md:w-1/2">
        <Accordian
          question={"Does Workstation provide ongoing support after project completion?"}
          answer={
            "Yes, we offer post-project support and maintenance to ensure your website, social media, and digital marketing campaigns run smoothly and efficiently."
          }
        />
        </div>
      </div>
    </>
  );
};

export default Faquestions;

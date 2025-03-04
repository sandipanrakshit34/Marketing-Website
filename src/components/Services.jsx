import React, { useEffect } from "react";
import Card from "./Card";
import { HiOutlineChartPie } from "react-icons/hi2";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  });

  // const clickHandler = () => {
  //   navigate("app-development");
  // };
  return (
    <div className="text-[#7A6960]">
      <h1 data-aos="fade-down" className="text-3xl font-semibold text-center">
        Services
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-orange-600 h-1 w-16 rounded"></div>
      </div>
      <p className="text-gray-700 text-center mt-7 mb-10 text-lg">
        Choose from live online courses, classroom training, or self-paced
        online programs.
      </p>
      <div
        className="flex flex-col lg:flex-row items-center gap-5"
        data-aos="fade-up"
      >
        <div onClick={() => navigate("/app-development")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Social Media Marketing"}
            desc={
              "Boost brand awareness and engagement across platforms."
            }
          />
        </div>

        <div onClick={() => navigate("/web-development")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Graphic Designing"}
            desc={
              "Creative and professional designs tailored to your brand."
            }
          />
        </div>

        <div onClick={() => navigate("/seo-optimization")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Web Development"}
            desc={
              "Custom, responsive, and user-friendly websites."
            }
          />
        </div>

        <div onClick={() => navigate("/campagin-creation")}>
          <Card
            img={<HiOutlineChartPie />}
            title={"Video Editing"}
            desc={
              "High-quality video production for marketing and branding."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

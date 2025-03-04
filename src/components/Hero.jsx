import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import CtaButton from "./CtaButton";
import VideoBtn from "./VideoBtn";
import img from "../img/hero-img.png";
import AOS from "aos";
import "aos/dist/aos.css";
import video from "../img/video/funny.mp4";



const Hero = () => {
  const myElement = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    gsap.to(myElement.current, {
      duration: 2,
      y: -100,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const typeSound = new Audio("/sounds/typing.mp3"); // Ensure the path is correct
    const typingInterval = setInterval(() => {
      if (charIndex < "Welcome to Workstation".length) {
        setTypedText((prev) => prev + "Welcome to Workstation"[charIndex]);
        setCharIndex((prev) => prev + 1);
        typeSound.currentTime = 0;
        typeSound.play();
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [charIndex]);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-10 secondary-font relative">
      <div
        data-aos="fade-right"
        data-aos-duration="1200"
        className="lg:w-1/2 w-full md:w-3/4 px-10 md:p-0"
      >
        <h1 className="text-[#7A6960] md:text-5xl text-3xl font-semibold">
          {typedText}
        </h1>
        <p className="text-xl mt-5 text-white primary-font">
        Workstation is a Digital Marketing Agency dedicated to helping businesses grow through innovative digital strategies. We specialize in creating compelling brand experiences through social media, design, web development, and video production. As a startup recognized by StartupIndia and MSME, we are committed to delivering impactful digital solutions.

        </p>
        <div className="flex flex-col sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          <a href="#contact" className="">
            <CtaButton name={"Get Started"} />
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 w-full md:w-3/4 py-16 px-10 md:px-0">
        <img ref={myElement} className="w-[500px] h-[450px] w-full animate" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Hero;

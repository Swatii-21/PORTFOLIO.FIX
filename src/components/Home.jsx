 
  
import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../constants";

const landingImg = "/logo.png";

export default function Home() {
  const textSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 25 },
  });

  const imageSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.95)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 280, friction: 20 },
    delay: 200,
  });

  return (
    <div
      id="home"
      className="container mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-12 bg-lightDesert text-darkDesert"
    >
      

      <animated.div style={textSpring} className="w-full md:w-1/2 text-center md:text-left px-2 md:px-6">
  <h1 className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-extrabold leading-tight mb-6">
    Hello, I&apos;m <br />
    <span className="text-goldDesert block mt-1">Swati Singh</span>
  </h1>
  <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
    A JavaScript developer 🚀 passionate about <span className="font-semibold">UI/UX</span> & clean web architecture. <br />
    Let’s build something amazing ✨
  </p>
  <div className="flex justify-center md:justify-start gap-6">
    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
      <FaGithub className="w-9 h-9 hover:text-goldDesert transition-colors duration-300" />
    </a>
    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="w-9 h-9 hover:text-goldDesert transition-colors duration-300" />
    </a>
    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
      <FaFileAlt className="w-9 h-9 hover:text-goldDesert transition-colors duration-300" />
    </a>
  </div>
</animated.div>


      {/* Right Section: Image */}
      <animated.div style={imageSpring} className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src={landingImg}
          alt="Swati coding illustration"
          className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] transition-transform duration-300 hover:scale-105"
        />
      </animated.div>
    </div>
  );
}

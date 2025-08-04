<<<<<<< HEAD
=======
 
  
>>>>>>> 9defae5 (Fix: rebuilt git index)
import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
<<<<<<< HEAD
  FaYoutube,
  FaFileAlt,
  FaBlog,
} from "react-icons/fa";
import { SiPerplexity } from "react-icons/si";
// import landingImg from "/logo.svg";
const landingImg = "/logo.png"; // <-- Your new image file

import {
  GITHUB_URL,
  LINKEDIN_URL,
  YOUTUBE_URL,
  RESUME_URL,
  BLOG_URL,
  PERPLEXITY_URL,
} from "../constants";

export default function Home() {
  const logoSpring = useSpring({
    from: { opacity: 0, transform: "scale(0.5)" },
    to: { opacity: 1, transform: "scale(1)" },
  });

  const iconSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 300, friction: 20 },
    delay: 300,
=======
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
>>>>>>> 9defae5 (Fix: rebuilt git index)
  });

  return (
    <div
      id="home"
<<<<<<< HEAD
      className="container mx-auto bg-lightDesert flex flex-col items-center justify-center min-h-screen"
    >
      {/* <animated.img
        style={logoSpring}
        className="w-fit mb-4"
        src={landingImg}
        alt="SS tech laptop logo"

      /> */}
 {/* <animated.img
  style={logoSpring}
  className="w-[768px] h-auto object-contain mb-4"
  src={landingImg}
  alt="SS tech laptop logo"
/> */}
  <div className="w-full flex justify-center items-center">
  <animated.img
    style={{ ...logoSpring, transform: "scale(0.5)" }} // 👈 Shrinks to 50%
    className="max-w-screen-xl h-auto object-contain mb-4 px-4"
    src={landingImg}
    alt="SS tech laptop logo"
  />
</div>


      <animated.div style={iconSpring} className="flex flex-col mt-2 space-x-6">
        <div className="flex mt-2 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-10 h-10" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-10 h-10" />
            <span className="sr-only">LinkedIn account</span>
          </a>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERPLEXITY_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <SiPerplexity className="w-10 h-10" />
            <span className="sr-only">Resume</span>
          </a> */}
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={YOUTUBE_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaYoutube className="w-10 h-10" />
            <span className="sr-only">YouTube Channel</span>
          </a> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={RESUME_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaFileAlt className="w-10 h-10" />
            <span className="sr-only">Resume</span>
          </a>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={BLOG_URL}
            className="text-darkDesert hover:text-goldDesert transition-colors duration-300"
          >
            <FaBlog className="w-10 h-10" />
            <span className="sr-only">Blog</span>
          </a> */}
        </div>
        {/* <div class="pt-6">
          <a href={PERPLEXITY_URL}
            class="inline-block px-4 py-2 bg-tealDesert text-white rounded-full text-sm font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
            Get $10 off Perplexity
          </a>

        </div> */}
=======
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
>>>>>>> 9defae5 (Fix: rebuilt git index)
      </animated.div>
    </div>
  );
}
<<<<<<< HEAD
  
=======
>>>>>>> 9defae5 (Fix: rebuilt git index)

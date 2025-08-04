import React, { memo, useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, PERPLEXITY_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";
import { SiPerplexity } from "react-icons/si";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  // Fade-in effect
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  // Springy effect on image hover
  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  // Slide-up effect
  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert min-h-screen"
    >
      <animated.img
        style={{ ...springProps }}
        src="images/profile.jpg"
        alt="Sara"
        className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
           Swati Singh
        </h1>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
           As a tech-loving, idea-churning full-stack developer, I bring real-world impact through clean code and purpose-driven products. With a sharp eye for UI/UX and a backend brain wired for logic, I build projects that don't just work — they connect. Currently grinding through engineering and building cool stuff on the side that solves actual student problems.

        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
           But there's more to me than just GitHub commits! I'm a writer at heart and a rebel in spirit — someone who believes that art, activism, and algorithms can intersect. I’ve worked on mental health platforms, blockchain learning tools, and FinTech ideas for freelancers — because tech should empower, not exclude.


        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Off-screen? You'll find me with a journal in one hand and a cup of chai in the other — either sketching life plans, drafting poetry, or dreaming up the next big project. I live for those quiet breakthroughs at midnight and that rush after solving a bug that’s been haunting me all day.

My adventures so far? Bouncing back from setbacks, learning something new every day, and chasing self-made dreams like a side hustle to pay my final-year college fees. I'm building in public — from code to confidence.
  
  <p className="text-lg text-darkDesert mb-4 text-center px-8">
      <strong>Let’s build something bold together.</strong> 
  </p>

   
        </p>

        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Let's collab!
        </p>
        <div className="flex justify-center items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
          {/* <Anchor href={PERPLEXITY_URL}>
            <SiPerplexity size={32} />
          </Anchor> */}
        </div>
        <div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);

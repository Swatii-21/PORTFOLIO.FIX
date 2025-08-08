 

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL } from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-darkDesert text-lightDesert py-4">
      <div className="flex flex-col items-center justify-center space-y-2">
        {/* Centered Text */}
        <p className="text-sm text-center">
          Made with <span className="text-red-500">❤️</span> by <strong>SWATI</strong>
        </p>

        {/* Optional Icons (remove if you want it simpler) */}
        <div className="flex space-x-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-goldDesert transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

/** @format */

import React from "react";
import { FaTwitter, FaTelegram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-center bg-green-900">
      <div className="">
        <p className="font-extrabold text-[40px] text-green-400">Join us in the community</p>

        <div className="flex justify-center mt-4">
          {/* Email Icon with Link */}
          <a
            href="mailto:Candy@msgreen.org"
            className="text-green-500 hover:text-green-700 mx-8"
          >
            <FaEnvelope size={30} />
          </a>

          {/* Twitter Icon with Link */}
          <a
            href="https://twitter.com/msgreencoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 mx-8"
          >
            <FaTwitter size={30} />
          </a>

          {/* Telegram Icon with Link */}
          <a
            href="https://t.me/msgreencoin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-700 mx-8"
          >
            <FaTelegram size={30} />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-t border-dotted border-green-500 my-4 w-full mx-auto text-9xl">
            {/* Your content goes here */}
          </div>
        </div>

          <p className="text-bold  text-white">
          
            © 2023 - 2024 Ms Green: The Sweetest Ride In Crypto
        </p>
      </div>
    </div>
  );
};

export default Footer;

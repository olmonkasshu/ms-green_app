import React from 'react';
import logo from "../assets/logo.png";
import Button from "./Button";
import { useState } from "react";
function Navbar() {
  let Links = [
    { name: "ABOUT", link: "#" },
    { name: "TOKENOMICS", link: "#" },
    { name: "ROADMAP", link: "#" },
    { name: "QUOTES", link: "#" },
  ];
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  
  const toggleMenu = () => {setIsMenuVisible(!isMenuVisible)};

  return (
    <div>
      <div className="shadow-md w-full fixed flex-wrap top-0 left-0">
        <div className="md:flex items-center justify-between bg-green-950 py-3 md:px-5 px-5">
          <div className="flex flex-shrink-0 justify-between font-bold text-2xl cursor-pointer flex items-center">
            <span>
              <img src={logo} height={100} width={70} className="" alt="Logo" />
            </span>
            <div onClick={toggleMenu} className="cursor-pointer">
              <button className="px-3 py-2 border-2 rounded text-white border hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <ul className={`md:block md:w-full md:flex md:items-center mt-4 md:mt-0 ${isMenuVisible ? '' : 'hidden'}`}>
            {Links.map((link, index) => (
              <li key={index} className="md:ml-4 py-2 text-md text-white hover:text-green-900 duration-500">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
            
            <div className="md:flex md:ml-4 space-x-2">
              <Button>
                BUY TOKEN
              </Button>
              <Button>
                WHITEPAPER
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

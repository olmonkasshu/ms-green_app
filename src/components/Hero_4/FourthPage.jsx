/** @format */

import React from "react";

const FourthPage = () => {
  return (
    <div className="flex m-20">
      {/* Left Column */}
      <div className="flex-1">
        {/* Add your text here */}
        <p className=" p-11 font-extrabold text-[40px] ">
        Melt-Proof Security:
        </p>
      </div>

      {/* Green Line */}
      <div className=" flex items-center justify-center h-[140px]  w-1 bg-green-500  mr-8"></div>

      {/* Right Column */}
      <div className="flex-1">
        {/* Add your text here */}
        <p className="pb-4 font-extrabold text-[40px]">
        Your Crypto Candy Jar
        </p>

        <p>
        Rest assured, our blockchain wrapper keeps your Ms $Green <br /> token safe and sound. 
        Our smart contracts are as solid as the <br /> shell of a candy-coated treat.
        </p>
      </div>
    </div>
  );
};

export default FourthPage;

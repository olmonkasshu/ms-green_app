import React from "react";
import Tokenomics from "../../assets/tokenomics.png";

const FifthPage = () => {
  return (
    <div className="my-3 mb-0 bg-green-900">
      <p className="font-extrabold text-[40px] text-center pt-8 text-green-400">Tokenomics</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white-800 mt-20 py-14 text-center md:text-left mx-52 md:mx-0"> {/* Added text-center for mobile */}
          <div className="flex items-center justify-center w-6 h-6 bg-yellow-600 rounded-full mb-10 col-span-1 md:ml-20">
            <span className="text-green-600 pl-20 ">Pre-sale</span>
          </div>

          <div className="flex items-center justify-center w-6 h-6 bg-orange-600 rounded-full mb-10 col-span-1 md:ml-20">
            <span className="text-green-600 pl-28 ">Liquidity Supply</span>
          </div>

          <div className="flex items-center justify-center w-6 h-6 bg-yellow-400 rounded-full mb-10 col-span-1 md:ml-20">
            <span className="text-green-600 pl-36">Aggressive Marketing</span>
          </div>

          <div className="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full mb-10 col-span-1 md:ml-20">
            <span className="text-green-600 pl-28">Team 15 Month locked</span>
          </div>

          <div className="flex items-center justify-center w-6 h-6 bg-blue-300 rounded-full mb-10 col-span-1 md:ml-20">
            <span className="text-green-600 pl-28">Airdrop</span>
          </div>

          <div className="flex items-center justify-center w-6 h-6 bg-green-300 rounded-full mb-10 col-span-1 md:ml-20">
            <span className="text-green-600 pl-36">Community Reward</span>
          </div>
        </div>

        <div className="md:col-span-1 mx-4 md:mx-0 flex items-center justify-center">
          <img src={Tokenomics} width={800} height={750} />
        </div>
      </div>
    </div>
  );
};

export default FifthPage;

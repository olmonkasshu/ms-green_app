import React, { useEffect, useState } from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const ProgressPieLoder = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrollPercent(Math.round((winScroll / height) * 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const circleCircumference = 30 * 2 * Math.PI;

  return (
    <div className="relative">
      {/* Top bar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div className="h-1 bg-green-500" style={{ width: `${scrollPercent}%` }}></div>
      </div>

      

      {/* Circle
      <div className="fixed inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5">
        <svg className="w-20 h-20">
          <circle className="text-gray-300" strokeWidth="5" stroke="currentColor" fill="transparent" r="30" cx="40" cy="40" />
          <circle
            className="text-green-600"
            strokeWidth="5"
            strokeDasharray={circleCircumference}
            strokeDashoffset={circleCircumference - (scrollPercent / 100) * circleCircumference}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="30"
            cx="40"
            cy="40"
          />
        </svg>
        <span className="absolute text-xl text-green-700">{`${scrollPercent}%`}</span>
      </div> */}

      
    </div>
  );
};

export default ProgressPieLoder;

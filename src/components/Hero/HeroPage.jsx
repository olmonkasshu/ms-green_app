import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import logo from "../../assets/logo.png";
import MSGREENAudio from "../../assets/MS$GREEN.mp3"; // Change the variable name to a valid identifier
import Button from '../Button';

const HeroPage = () => {
  const playAudio = () => {
    const audio = new Audio(MSGREENAudio); // Use the corrected variable name
    audio.play();
  };

  const strings = ["Ms $Green", "Green M&M", "$Green Token", "Green M&M"];

  return (
    <div className='bg-white-800 mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 py-14'>
      {/* Your text goes here */}
      <div className='col-span-1 md:ml-20'>
        {/* Your type effect goes here */}
        <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl  mx-6 md:ml-0'>
          <br />
          <Typewriter
            words={strings}
            loop
            cursor
            cursorStyle='_'
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1000}
          />
        </h1>
        <p className='ttext-green text-lg md:text-xl lg:text-2xl mx-6 md:ml-0'><br />Discover meme delight with Ms $Green
          <br></br>
          a playful token, a tasty potential.Sweeten your <br /> portfolio today! 🍬🪙🚀</p>

        {/* Your btn goes here */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-6 md:ml-0 '>
          <Button className="md:mr-2 active">
            BUY TOKEN
          </Button>

          <Button>
            WHITE PAPER
          </Button>

          <Button className='md:py-10' onClick={playAudio}>
            PLAY
          </Button>
        </div>
      </div>

      <div className="md:col-span-1 mx-6 md:ml-0">
        {/* Your image goes here */}
        <img src={logo} className="w-max md:w-auto max-h-3/4  md:h-3/4 md:py-6 object-contain" alt="Logo" />
      </div>
    </div>
  );
};

export default HeroPage;

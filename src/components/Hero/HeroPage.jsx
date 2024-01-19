import React from 'react'
import Typed from 'react-typed'
import logo from "../../assets/logo.png";
import Button from '../Button';

const HeroPage = () => {
  return (
    <div className='bg-white-800 my-20 grid grid-cols-1 md:grid-cols-2 gap-4 py-14'>
      {/*Your text goes here*/}
      <div className='col-span-1 md:ml-20'>
        {/*Your type effect goes here*/}
        <h1 className='font-bold text-4xl md:text-5xl lg:text-6xl  mx-6 md:ml-0'>
          <br />
          <Typed
            strings={[
              "Ms $Green", "Green M&M", "$Green Token"
            ]}
            typeSpeed={150}
            backSpeed={100}
            loop
          />

        </h1>
        <p className='ttext-green text-lg md:text-xl lg:text-2xl mx-6 md:ml-0'><br />Discover meme delight with Ms $Green
          <br></br>
          a playful token, a tasty potential.Sweeten your <br /> portfolio today! 🍬🪙🚀</p>

        {/*Your btn goes here*/}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-6 md:ml-0'>
          <Button className="md:mr-2 active">
            BUY TOKEN
          </Button>

          <Button>
            WHITE PAPER
          </Button>

          <Button className='md:py-10'>
            PLAY
          </Button>
        </div>


      </div>

      <div class="md:col-span-1 mx-6 md:ml-0">
        {/*Your image goes here*/}
        <img src={logo} className="w-max md:w-auto max-h-3/4  md:h-3/4 md:py-6 object-contain" />
      </div>
    </div>


  )
}

export default HeroPage
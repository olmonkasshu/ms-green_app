import React from 'react'
import Typed from 'react-typed'
import logo from "../../assets/logo.png";
import Button from '../Button';

const HeroPage = () => {
   return (
    <div className='bg-white-800 my-20 grid grid-cols-2 gap-4  py-14'>
      {/*Your text goes here*/}
     <div className='col-span-1 ml-20'>
      {/*Your type effect goes here*/}
     <h1 className='font-bold text-5xl px-4 '>
        <br />
        <Typed
        strings = {[
          "Ms $Green", "Green M&M","$Green Token"
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
        />
        
      </h1>
     <p className='text-green  text-xl '><br />Discover meme delight with Ms $Green
     <br></br>
      a playful token, a tasty potential.Sweeten your <br/> portfolio today! 🍬🪙🚀</p>

      {/*Your btn goes here*/}

      <div className='grid grid-cols-2 gap-2'>
  <Button className="mr-2 active:">
    BUY TOKEN
  </Button>

  <Button>
    WHITE PAPER
  </Button>

  <Button className='py-10'>
    PLAY
  </Button>
</div>
      

     </div>
      
     <div class="col-span-1">
    {/*Your image goes here*/}
    <img src={logo}  className="w-max h-3/4 py-6" />
  </div>
    </div>
  )
}

export default HeroPage
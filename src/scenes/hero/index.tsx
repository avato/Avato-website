import { useState } from 'react';
import { centerVertical, fancyFont } from '/src/shared/tailwind.tsx';

type Props = {}

const Hero = (props: Props) => {
  const cVertical = centerVertical();
  const circleStyle = {
    width: '100%',
    maxWidth: '100%',
    paddingTop: '100%',
    maxHeight: '100vh'
  };
  const fFont = fancyFont();
  
  return (
    <div className={`h-screen w-screen ${cVertical}`} >
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex-1 w-3/6 text-center items-center justify-center">
          <p className="text-center uppercase text-slate-900 font-semibold">
            Hello, 
            <span className="text-primary-500"> my name is</span>
          </p>
          <h1 className="my-7 text-7xl text-primary-500 font-black" style={fFont}>A J</h1>
          <p className="text-center uppercase text-slate-900 font-semibold text-sm">
            I am a freelance
            <span className="font-caveat font-bold normal-case text-xl"> Full Stack Developer</span>
          </p>
          <div className="byline mt-24">
            <div className="text-center text-slate-900 font-semibold">Skillfully Crafting</div>
            <div className="text-center my-8 uppercase text-5xl text-primary-500 font-black tracking-widest1" style={fFont}>light and bytes </div>
            <div className="text-center text-slate-900 font-semibold">for Ambitious Brands</div>
          </div>
        </div>
        <div className="flex-1 w-3/6">
          <div className="bg-primary-500 rounded-full mx-auto" style={circleStyle}></div>
        </div>
      </div>
     </div>
  )
}

export default Hero
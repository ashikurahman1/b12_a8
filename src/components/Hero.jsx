import React from 'react';
import GooglePlay from '../assets/playStore.png';
import AppleStore from '../assets/AppleStore.png';
import HeroImage from '../assets/hero.png';
import CompanySummary from './CompanySummary';
const Hero = () => {
  return (
    <div>
      {/* // Top Hero */}
      <div className="bg-neutral-100 pt-15 px-5">
        <div className=" space-y-6 w-full mx-auto lg:w-8/12 flex flex-col items-center ">
          <h1 className="text-sky-950 text-7xl font-bold  leading-tight w-full lg:w-xl lg:text-center">
            We Build{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                background:
                  'linear-gradient(145deg,rgba(99, 46, 227, 1) 0%, rgba(159, 98, 242, 1) 100%)',
                WebkitBackgroundClip: 'text',
              }}
            >
              Productive
            </span>{' '}
            Apps
          </h1>
          <p className="text-slate-500  text-lg tracking-wide">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex gap-10 justify-center pb-10">
            <button className="px-4 lg:px-6 py-2 lg:py-3 rounded-md border border-neutral-300 flex items-center gap-3 cursor-pointer hover:bg-gradient-to-tl to-purple-700 from-indigo-500 hover:text-white transition">
              <img src={GooglePlay} alt="Google Play" /> Google Play
            </button>
            <button className="px-4 lg:px-6 py-2 lg:py-3 rounded-md border border-neutral-300 flex items-center gap-3 cursor-pointe hover:bg-gradient-to-tl to-purple-700 from-indigo-500 hover:text-white transition">
              <img src={AppleStore} alt="App Store" /> App Store
            </button>
          </div>
          <div>
            <img src={HeroImage} alt="Hero Image" className="block" />
          </div>
        </div>
      </div>
      {/* // Hero Bottom / Trusted Section */}
      <CompanySummary />
    </div>
  );
};

export default Hero;

import React from 'react';
import Homeimg from '../../assets/avataaars.svg';

export default function Home() {
  return (
    <div className="bg-teal-400 h-screen  flex items-center justify-center text-white">
      <div className="container mx-auto flex flex-col items-center">
        <img src={Homeimg} alt="Home illustration" className="w-full max-w-xs" />
        <h1 className="mr-4 cursor-pointer py-1.5 text-4xl font-bold uppercase">START FRAMEWORK</h1>
        <div className="flex items-center my-4">
          <div className="border-t border-white flex-grow mx-2"></div>
          <span className="mx-2 star"> ★ </span>
          <div className="border-t border-white flex-grow mx-2"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}

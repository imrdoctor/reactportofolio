import React from 'react';

export default function Home() {
  return (
    <div className="bg-teal-400 min-h-screen flex items-center justify-center flex-col text-white">
      <div className="container mx-auto flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold uppercase text-white py-1.5 sm:text-5xl md:text-6xl lg:text-5xl">
          About Component
        </h1>
        <span className="text-white mx-2 star text-lg sm:text-xl md:text-2xl lg:text-3xl">
          ★
        </span>
        <div className="description p-4 sm:p-8 md:p-12 lg:p-16 flex flex-col sm:flex-row justify-center items-start gap-4">
          <p className="text-sm sm:text-base md:text-lg lg:text-lg flex-1">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg flex-1">
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </div>
  );
}

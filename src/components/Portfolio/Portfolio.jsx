import React, { useState } from 'react';
import poret1 from '../../assets/poert1.png';
import poret2 from '../../assets/port3.png';
import poret3 from '../../assets/port2.png';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col felx-wrap">
      <div className="container mx-auto flex flex-col items-center px-4">
        <h1 className="text-4xl font-bold uppercase text-slate-800 py-1.5 sm:text-5xl md:text-6xl lg:text-5xl text-[#2c3e50]">Portfolio Component</h1>
        <span className="mx-2 star2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#2c3e50]">★</span>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {[poret1, poret3, poret2, poret1, poret3, poret2].map((img, index) => (
            <div 
              key={index} 
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Portfolio ${index + 1}`} 
                className="w-full h-auto transform transition-all duration-300 rounded-lg"
              />
              <div className="absolute inset-0 bg-teal-500 bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <i className="fas fa-plus text-white text-6xl"></i>
              </div>
            </div>
          ))}
        </div>
        
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" 
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Selected" className="max-w-full max-h-full rounded-lg" />
              <button 
                className="absolute top-2 right-2 text-white text-2xl" 
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Portfolio;

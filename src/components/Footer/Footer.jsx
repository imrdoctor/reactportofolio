import React from "react";
import { Typography } from "@material-tailwind/react";

export default function () {
  return (
      <footer className="bg-blue-gray-800 text-white pt-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-1/3 text-left">
            <Typography variant="h6" className="mb-4">
              LOCATION
            </Typography>
            <Typography variant="paragraph">
              2215 John Daniel Drive <br />
              Clark, MO 65243
            </Typography>
          </div>
          <div className="w-full md:w-1/3 text-center">
            <Typography variant="h6" className="mb-4">
              AROUND THE WEB
            </Typography>
            <div className="flex justify-center space-x-4">
            <a href="#" className="border border-sky-500 rounded-full p-5 w-8 h-8 flex items-center justify-center">
            <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="border border-sky-500 rounded-full p-5 w-8 h-8 flex items-center justify-center">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="border border-sky-500 rounded-full p-5 w-8 h-8 flex items-center justify-center">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="border border-sky-500 rounded-full p-5 w-8 h-8 flex items-center justify-center">
              <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <Typography variant="h6" className="mb-4">
              ABOUT FREELANCER
            </Typography>
            <Typography variant="paragraph">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </Typography>
          </div>
        </div>
        <div className="bg-blue-gray-900 py-4 mt-8">
          <Typography variant="paragraph" className="text-center text-blue-gray-500">
            &copy; 2026 Start Framework
          </Typography>
        </div>
      </footer>
  );
}
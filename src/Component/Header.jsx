import React from 'react';
import Navbar from './Navbar'; // Relative to Header.jsx
import { assets } from '../assets/assets'; // Make sure header_img is exported here

function Header() {
  return (
    <div
      id="home"
      className="relative min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">
          EXPLORE TO FIT YOUR VISION
        </h2>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

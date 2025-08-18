import React, { useState } from 'react';
import { assets } from '../assets/assets';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // close mobile menu on click
  };

  return (
    <nav className='w-full bg-black text-white fixed top-0 left-0 z-50'>
      <div className='flex justify-between items-center px-6 py-4'>
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className='w-24 h-auto' />

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-4'>
          <button onClick={() => handleScroll('home')} className='px-4 py-2 rounded-full hover:bg-gray-700 transition'>Home</button>
          <button onClick={() => handleScroll('about')} className='px-4 py-2 rounded-full hover:bg-gray-700 transition'>About</button>
          <button onClick={() => handleScroll('projects')} className='px-4 py-2 rounded-full hover:bg-gray-700 transition'>Project</button>
          <button onClick={() => handleScroll('testimonial')} className='px-4 py-2 rounded-full hover:bg-gray-700 transition'>Testimonial</button>
        </div>

        {/* Mobile Menu Button */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          <img 
            src={isOpen ? assets.cross_icon : assets.menu_icon} 
            alt="Menu" 
            className='w-7 h-7'
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center bg-black/90 space-y-2 py-4 transition-all duration-300'>
          <button onClick={() => handleScroll('home')} className='px-4 py-2 rounded-full hover:bg-gray-700 w-3/4 text-center'>Home</button>
          <button onClick={() => handleScroll('about')} className='px-4 py-2 rounded-full hover:bg-gray-700 w-3/4 text-center'>About</button>
          <button onClick={() => handleScroll('projects')} className='px-4 py-2 rounded-full hover:bg-gray-700 w-3/4 text-center'>Project</button>
          <button onClick={() => handleScroll('testimonial')} className='px-4 py-2 rounded-full hover:bg-gray-700 w-3/4 text-center'>Testimonial</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

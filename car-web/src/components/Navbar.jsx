import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click
  };

  return (
    <header>
      <nav className='bg-zinc-900 flex justify-between items-center py-2 px-4 w-full fixed top-0 z-20'>
        <div className='flex items-center font-semibold text-2xl'>
          <img src={logo} alt="VroomWheels Logo" className="h-[50px] w-auto mr-2" />
          <a href="/" className="text-white">VroomWheels</a>
        </div>
        <div className='hidden md:flex items-center gap-9'>
          <ul className='flex font-medium text-xl gap-9'>
            <li className="text-white hover:text-red-500 duration-200">
              <Link to="/" onClick={handleLinkClick}>Home</Link >
            </li>
            <li className="text-white hover:text-red-500 duration-200">
              <Link  to="/about" onClick={handleLinkClick}>About Us</Link >
            </li>
            <li className="text-white hover:text-red-500 duration-200">
              <Link  to="/cars" onClick={handleLinkClick}>Our Cars</Link >
            </li>
            <li className="text-white hover:text-red-500 duration-200">
              <Link  to="/services" onClick={handleLinkClick}>Services</Link >
            </li>
          </ul>
          <div className='hidden lg:flex gap-9'>
          <Link to="/sign-in"><button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black duration-200'>Sign In</button></Link>
          <Link to="/sign-up"><button className='bg-white px-4 py-2 rounded-md hover:bg-red-500 hover:text-white duration-200'>Sign Up</button></Link>
          </div>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white'>
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className='absolute md:hidden right-0 bg-zinc-800  z-10 flex justify-center rounded-sm px-10 py-7 mt-[70px]'>
          <ul className='flex flex-col items-center font-medium text-xl p-4'>
            <li className="text-white hover:text-red-500 duration-200 mb-3">
              <Link  to="/" onClick={handleLinkClick}>Home</Link >
            </li>
            <li className="text-white hover:text-red-500 duration-200 mb-3">
              <Link  to="/about" onClick={handleLinkClick}>About Us</Link >
            </li>
            <li className="text-white hover:text-red-500 duration-200 mb-3">
              <Link  to="/cars" onClick={handleLinkClick}>Our Cars</Link >
            </li>
            <li className="text-white hover:text-red-500 duration-200 mb-3">
              <Link  to="/services" onClick={handleLinkClick}>Services</Link >
            </li>
            <div className='flex flex-col gap-4 mt-4 w-full px-4'>
              <Link to="/sign-in" onClick={handleLinkClick}><button className='bg-red-500 text-white w-full px-4 py-2 rounded-md hover:bg-white hover:text-black duration-200'>Sign In</button></Link>
              <Link to="/sign-up" onClick={handleLinkClick}><button className='bg-white text-red-500 w-full px-4 py-2 rounded-md hover:bg-red-500 hover:text-white duration-200'>Sign Up</button></Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

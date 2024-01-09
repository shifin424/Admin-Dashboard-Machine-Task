import React from 'react';
import LogoImage from '../assets/Images/logo.png';

const Header = () => (
  <div className="flex items-center justify-evenly h-17 bg-white border shadow-md border-b-black">
    <img src={LogoImage} className="w-30 h-16 mr-4" alt="" />
    <span className="mr-5 text-[#1ea5d6] font-bold">Logo</span>
  </div>
);

export default Header;

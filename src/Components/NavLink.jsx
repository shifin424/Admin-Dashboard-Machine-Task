import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, icon: Icon, label, additionalIcon: AdditionalIcon }) => (
  <Link
    to={to}
    className="flex items-center transition-colors duration-300 hover:bg-[#e1f5fc] hover:border-l-4 hover:border-blue-800 hover:text-blue-800 text-gray-600 font-semibold p-2 rounded"
  >
    {Icon && <Icon className="mr-7" />}
    {label}
    {AdditionalIcon && <AdditionalIcon className="ml-auto" />}
  </Link>
);

export default NavLink;

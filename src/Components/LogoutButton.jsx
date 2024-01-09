import React from 'react';
import { IoPower } from 'react-icons/io5';

const LogoutButton = () => (
  <div className="mt-auto p-4">
    <button className="bg-[#1ea5d6] hover:bg-[#51cffc] text-white p-2 rounded w-full flex items-center justify-center">
      <IoPower className="mr-2" />
      Log out
    </button>
  </div>
);

export default LogoutButton;

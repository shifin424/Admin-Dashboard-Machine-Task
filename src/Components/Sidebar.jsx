import React from 'react';
import Header from './Header';
import NavLink from './NavLink';
import LogoutButton from './LogoutButton';
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdPlayArrow } from "react-icons/md";

function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-screen bg-white shadow-2xl border border-r-black text-black">
      <Header />
      <div className="flex flex-col p-4 space-y-4 border-black">
        <NavLink to="/dashboard" icon={CgMenuRightAlt} label="Dashboard" />
        <NavLink to="/profile" icon={FaUser} label="Profile" />
        <NavLink to="/invoice" icon={HiOutlineDocumentText} label="Invoice" additionalIcon={MdPlayArrow} />
        <NavLink to="/customers" icon={HiUsers} label="Customers" />
        <NavLink to="/users" icon={FaUsers} label="Users" />
      </div>

      <LogoutButton />
    </div>
  );
}

export default Sidebar;

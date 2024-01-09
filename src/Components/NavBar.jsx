import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assets/Images/Avatar.png";
import { CgMenuRightAlt } from "react-icons/cg";
import { VscBellDot } from "react-icons/vsc";

const NavBar = () => {
    return (
        <nav className="bg-white border border-b-black">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CgMenuRightAlt className="w-8 h-7 text-[#1ea5d6]" />
                    <span className="self-center text-lg font-bold whitespace-nowrap text-[#1ea5d6]">DASHBOARD</span>
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <VscBellDot className="text-xl text-gray-700 mr-3" />
                    <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-500 mr-2">Wallet Balance</span>
                        <span className="text-base text-gray-700">25.000</span>
                    </div>
                    <span type="button" className="flex text-sm  rounded-full md:me-0">
                        <img className="w-8 h-8 rounded-ful mr-5" src={Avatar} alt="user photo" />
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

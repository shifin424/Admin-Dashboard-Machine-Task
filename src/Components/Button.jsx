import React from "react";
import { IoPowerSharp } from "react-icons/io5";

const Button = ({ onClick,label }) => (
    <div className="mt-auto p-4">
        <button
            className="bg-[#1ea5d6] hover:bg-[#51cffc] text-white p-2 rounded w-full flex items-center justify-center"
            onClick={onClick}
        >
            <IoPowerSharp className="mr-2"/>
            {label}
        </button>
    </div>
);

export default Button;

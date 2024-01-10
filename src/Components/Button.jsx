import React from "react";

const Button = ({ onClick,icon: Icon, label }) => (
    <div className="mt-auto p-4">
        <button
            className="bg-[#1ea5d6] hover:bg-[#51cffc] text-white p-2 rounded w-full flex items-center justify-center"
            onClick={onClick}
        >
            {Icon && <icon className="mr-2" />}
            {label}
        </button>
    </div>
);

export default Button;

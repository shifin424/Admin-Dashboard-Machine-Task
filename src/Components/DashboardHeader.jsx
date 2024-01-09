import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

function DashboardHeader() {
    const [selectedOption, setSelectedOption] = useState("today");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <div>
            <div className="h-20 flex justify-end">
                <div className="bg-white ml-5 mt-8 w-60 h-12 rounded-md">
                    <div className="flex mt-2 ml-2 mr-2">
                        <button
                            className={`flex-1 px-2 py-1 text-center ${selectedOption === "today" ? "bg-[#1ea5d6] text-white rounded " : "text-[#1ea5d6]"
                                }`}
                            onClick={() => handleOptionClick("today")}
                        >
                            Today
                        </button>
                        <button
                            className={`flex-1 px-2 py-1 text-center ml-2 ${selectedOption === "weekly" ? "bg-[#1ea5d6] text-white rounded " : "text-[#1ea5d6]"
                                }`}
                            onClick={() => handleOptionClick("weekly")}
                        >
                            Weekly
                        </button>
                        <button
                            className={`flex-1 px-2 py-1 text-center ml-2 ${selectedOption === "monthly" ? "bg-[#1ea5d6] text-white rounded " : "text-[#1ea5d6]"
                                }`}
                            onClick={() => handleOptionClick("monthly")}
                        >
                            Monthly
                        </button>
                    </div>
                </div>
                <div className="bg-white ml-6 mr-10 w-20 h-12 mt-8 rounded-md flex text-[#1ea5d6] items-center">
                    <span className="mr-2 ml-3">Date</span>
                    <FaCalendarAlt />
                </div>
            </div>
        </div>
    );
}

export default DashboardHeader;

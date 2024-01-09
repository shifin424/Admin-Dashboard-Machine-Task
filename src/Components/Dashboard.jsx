import React from "react";
import backgroundImageUrl from "../assets/Images/background-invoice.png";

function Dashboard() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="flex mt-5">
            <div className=" h-72 w-96 rounded overflow-hidden ml-14">
                <div className="text-white h-full rounded ml-12 flex flex-col justify-evenly" style={containerStyle}>
                    <span className="text-md ml-10 mt-5">Number of Paid Leaves</span>
                    <span className="text-2xl font-bold ml-10">324</span>
                    <span className="text-md ml-10">Value of Paid Invoices</span>
                    <span className="text-2xl font-bold ml-10 mb-5">2705.96</span>
                </div>
            </div>

            <div className="grid grid-cols-2 ml-10 gap-5 mt-7">
                <div className="bg-white h-24 w-80 rounded flex flex-col ">
                    <span className="text-md ml-10 mt-5 mb-2">Invoice Created</span>
                    <span className="text-2xl font-bold ml-10">342</span>
                </div>
                <div className="bg-white h-24 w-80 rounded flex flex-col">
                    <span className="text-md ml-10 mt-5 mb-2">Number of Customers</span>
                    <span className="text-2xl font-bold ml-10">971</span>
                </div>
                <div className="bg-white h-24 w-80 rounded flex flex-col">
                    <span className="text-md ml-10 mt-5 mb-2">Value of Transactions</span>
                    <span className="text-2xl font-bold ml-10">857</span>
                </div>
                <div className="bg-white h-24 w-80 rounded flex flex-col">
                    <span className="text-md ml-10 mt-5 mb-2">Expiring Invoices</span>
                    <span className="text-2xl font-bold ml-10">15</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

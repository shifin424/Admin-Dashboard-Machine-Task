import React from "react";
import backgroundImageUrl from "../assets/Images/background-invoice.png";
import DashboardButton from "./DashboardButton";
import { HiOutlineDocumentText } from "react-icons/hi";


function Dashboard() {
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <div className="flex flex-col items-center mt-5">
            <div className="flex">
                <div className="h-72 w-96 rounded overflow-hidden">
                    <div
                        className="text-white h-full rounded  flex flex-col justify-evenly"
                        style={containerStyle}
                    >
                        <span className="text-md ml-10 mt-5">Number of Paid Leaves</span>
                        <span className="text-2xl font-bold ml-10">324</span>
                        <span className="text-md ml-10">Value of Paid Invoices</span>
                        <span className="text-2xl font-bold ml-10 mb-5">2705.96</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 ml-10 gap-5 mt-1">
                    <div className="bg-white h-25 w-80 rounded flex flex-col">
                        <span className="text-md ml-10 mt-5 mb-2">Invoice Created</span>
                        <span className="text-2xl font-bold ml-10">342</span>
                    </div>
                    <div className="bg-white h-25 w-80 rounded flex flex-col">
                        <span className="text-md ml-10 mt-5 mb-2">Number of Customers</span>
                        <span className="text-2xl font-bold ml-10">971</span>
                    </div>
                    <div className="bg-white h-25 w-80 rounded flex flex-col">
                        <span className="text-md ml-10 mt-5 mb-2">Value of Transactions</span>
                        <span className="text-2xl font-bold ml-10">857</span>
                    </div>
                    <div className="bg-white h-25 w-80 rounded flex flex-col">
                        <span className="text-md ml-10 mt-5 mb-2">Expiring Invoices</span>
                        <span className="text-2xl font-bold ml-10">15</span>
                    </div>
                </div>
            </div>

            <div className="flex mt-4  mr-[48rem]">
                <DashboardButton
                    icon={HiOutlineDocumentText}
                    label="Create Invoice"
                    onClick={() => {
                        console.log("clicked btn 1")
                    }}
                    className="bg-[#1ea5d6] hover:bg-[#51cffc] text-white p-2 rounded w-full flex items-center ml-9 justify-center"
                />
                 <HiOutlineDocumentText/>
                <DashboardButton
                    label="Add Customer"
                    onClick={() => {
                        console.log("clicked btn 2")
                    }}
                    className="bg-[#1ea5d6] hover:bg-[#51cffc] text-white p-2 rounded w-full flex items-center ml-9 justify-center"
                />
            </div>
        </div>
    );
}

export default Dashboard;

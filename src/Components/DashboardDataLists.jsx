import React from "react";

function DashboardDataLists() {
    return (
        <div>
            <div className="flex">
                <div className="mt-4 bg-white rounded w-[22rem] mr-[4rem] ml-[7rem] h-28 p-3">
                    <h1 className="text-[#48add2] font-semibold ml-5 mb-1">Today's Invoice</h1>
                    <div className="bg-gray-200 ">
                        <span className="text-xs ml-5">Payment Ref</span>
                        <span className="text-xs ml-5">Invoice Value</span>
                        <span className="text-xs ml-5">Invoice Status</span>
                    </div>
                    <span className="text-xs ml-[6.5rem]">No Data Found</span>
                    <hr className="border-2 border-solid text-black font-bold mt-2" />
                </div>
                <div className="mt-4 w-[41rem]  bg-white p-3">
                    <h1 className="text-[#48add2] font-semibold ml-5 mb-1">Today's Paid Invoice</h1>
                    <div className="bg-gray-200 flex h-5 justify-around">
                        <span className="text-xs ">Payment Ref</span>
                        <span className="text-xs ">Invoice Value</span>
                        <span className="text-xs ">Commission</span>
                        <span className="text-xs ">Transaction ID</span>
                    </div>
                    <div className="flex justify-center">
                        <span className="text-xs mt-2 ">No Data Found</span>
                    </div>
                    <hr className="border-2 border-solid text-black font-bold mt-2" />
                </div>
            </div>
        </div>
    );
}

export default DashboardDataLists;

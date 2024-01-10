import React from "react";
import Sidebar from "../../Components/Sidebar";
import NavBar from "../../Components/NavBar";
import background from "../../assets/Images/background.png";
import DashboardHeader from "../../Components/DashboardHeader";
import Dashboard from "../../Components/Dashboard";
import DashboardDataLists from "../../Components/DashboardDataLists";


function AdminDashboard() {
    return (
        <div
            className="flex"
            style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <NavBar />
                <DashboardHeader/>
                <Dashboard/>
                <DashboardDataLists/>
            </div>
        </div>
    );
}

export default AdminDashboard;

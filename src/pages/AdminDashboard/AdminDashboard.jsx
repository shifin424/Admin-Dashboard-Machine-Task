import React from "react";
import Sidebar from "../../Components/Sidebar";
import NavBar from "../../Components/NavBar";
import background from "../../assets/Images/background.png";
import DashboardHeader from "../../Components/DashboardHeader";
import Dashboard from "../../Components/Dashboard";

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
            </div>
        </div>
    );
}

export default AdminDashboard;

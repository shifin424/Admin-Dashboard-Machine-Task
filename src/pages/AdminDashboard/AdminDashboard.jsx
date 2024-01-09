import React from "react";
import Sidebar from "../../Components/Sidebar";
import NavBar from "../../Components/NavBar";
import background from "../../assets/Images/background.png";
import DashboardHeader from "../../Components/DashboardHeader";

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
            </div>
        </div>
    );
}

export default AdminDashboard;

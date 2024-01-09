import React from 'react';
import Sidebar from '../../Components/Sidebar';
import NavBar from '../../Components/NavBar';

function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <NavBar />
      </div>
    </div>
  );
}

export default AdminDashboard;

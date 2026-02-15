import React from 'react';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
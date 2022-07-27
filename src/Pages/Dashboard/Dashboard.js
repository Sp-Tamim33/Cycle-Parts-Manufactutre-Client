import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';

const Dashboard = () => {
    return (

        <div className='text-white'>
            <DashboardHeader />
            <div>
                <Outlet />
            </div>
        </div>

    );
};

export default Dashboard;
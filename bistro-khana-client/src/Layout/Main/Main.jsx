import React from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

const Main = () => {
    const location = useLocation();
    const noNavFooter = location.pathname === '/login' || location.pathname === '/signup'
    return (
        <div className='cinzel-font'>
            {noNavFooter ?
                <></>
                :
                <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {noNavFooter ?
                <></>
                :
                <Footer></Footer>
            }
        </div>
    );
};

export default Main;
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer';

const Main = () => {
    return (
        <div className='cinzel-font'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
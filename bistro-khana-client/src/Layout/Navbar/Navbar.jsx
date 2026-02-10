import React from 'react';
import { NavLink } from 'react-router';
const Navbar = () => {
    const navoptions =
        <>
            <NavLink className='uppercase font-bold text-xl inter-font'><li>Home</li></NavLink>
            <NavLink className='uppercase font-bold text-xl inter-font'><li>Contact us</li></NavLink>
            <NavLink className='uppercase font-bold text-xl inter-font'><li>Our menu</li></NavLink>
            <NavLink className='uppercase font-bold text-xl inter-font'><li>Our Shop</li></NavLink>
        

        </>
    return (
        <div>
            <div className="navbar bg-black opacity-70 shadow-sm px-15 py-4 fixed z-10 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navoptions}
                        </ul>
                    </div>
                    <a className="font-black text-3xl">BISTRO BOSS
                        <br />
                        <span className="font-bold uppercase text-2xl">R e s t a u r a n t</span></a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-5">
                            {navoptions}
                        </ul>
                    </div>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
                    </button>
                    <button className='uppercase font-bold text-xl inter-font'>Sign out</button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
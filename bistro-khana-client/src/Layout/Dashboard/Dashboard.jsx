import React from 'react';
import { FaBook, FaCalendarAlt, FaCalendarDay, FaHome, FaList, FaListAlt, FaShoppingBag, FaShoppingCart, FaUser, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router';
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { FaMessage } from 'react-icons/fa6';
import { push as Menu } from 'react-burger-menu'
import './dashboard.css'
const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className='flex cinzel-font dark7-bg min-h-screen '>
            <div className='w-1/12 ' id="outer-container">
                <Menu width={'20%'} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
                    <div className="drawer lg:drawer-open w-full">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                                Open drawer
                            </label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

                            <ul className="menu dashboard-bg min-h-screen w-80 p-12 font-medium text-[16px] text-black">
                                <h3 className=' font-bold text-[26px]'>Bistro Boss</h3>
                                <h4 className=' font-bold text-lg mb-20'>R e s t a u r a n t</h4>
                                {/* Sidebar content here */}
                                {isAdmin ?
                                    <>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={`/dashboard/adminHome`}><FaHome></FaHome> Admin home</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/additems'}><FaUtensils></FaUtensils> Add items</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/manageitems'}><FaListAlt></FaListAlt> Manage Items</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/manageBooking'}><FaBook></FaBook> Manage Bookings</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/allusers'}><FaUsers></FaUsers> All users</NavLink></li>
                                    </>
                                    :
                                    <>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={`/dashboard/userHome`}><FaHome></FaHome> User home</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/reservation'}><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/payment'}><FaWallet></FaWallet> Payment History</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/carts'}><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/review'}><BiSolidMessageAltDetail /> Add Review</NavLink></li>
                                        <li><NavLink className={'  focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/dashboard/myBooking'}><FaCalendarDay></FaCalendarDay> My Booking</NavLink></li>
                                    </>
                                }
                                {/* divider */}
                                <div className="divider"></div>
                                <li><NavLink className={'focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/'}><FaHome /> Home</NavLink></li>
                                <li><NavLink className={'focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/ourmenu'}><FaList></FaList> Menu</NavLink></li>
                                <li><NavLink className={'focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/ourshop/salad'}><FaShoppingBag></FaShoppingBag> Shop</NavLink></li>
                                <li><NavLink className={'focus:outline-2 focus:text-white focus:outline-offset-2 focus:outline-violet-500 '} to={'/contactus'}><FaMessage></FaMessage> Contact</NavLink></li>
                            </ul>

                        </div>

                    </div>
                </Menu>
            </div>
            <div className='w-3/4' id="page-wrap">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;
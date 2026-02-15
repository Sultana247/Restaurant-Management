import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import AuthContext from '../../Provider/AuthContext';
import Swal from 'sweetalert2';
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import useCart from '../../hooks/useCart';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cart] = useCart();
    const handleSignOut = () => {
        logout()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                Swal.fire({
                    title: error.message,
                    showClass: {
                        popup: `
                                    animate__animated
                                    animate__fadeInUp
                                    animate__faster
                                    `
                    },
                    hideClass: {
                        popup: `
                                    animate__animated
                                    animate__fadeOutDown
                                    animate__faster
                                    `
                    }
                });
            })
    }
    const navoptions =
        <>
            <NavLink className='uppercase font-bold text-xl inter-font'><li>Home</li></NavLink>
            <NavLink to={'/contactus'} className='uppercase font-bold text-xl inter-font'><li>Contact us</li></NavLink>
            <NavLink to={'/ourmenu'} className='uppercase font-bold text-xl inter-font'><li>Our menu</li></NavLink>
            <NavLink to={`/ourshop/salad`} className='uppercase font-bold text-xl inter-font'><li>Our Shop</li></NavLink>
            <NavLink to={`/carts`} className='uppercase font-bold text-xl inter-font'><li>
                <button className="btn">
                    <FaShoppingCart></FaShoppingCart> <div className="badge badge-sm badge-secondary">+{cart.length}</div>
                </button>
            </li></NavLink>

        </>
    return (
        <div>
            <div className="navbar bg-black opacity-70 shadow-sm px-15 py-4 fixed z-10 lg:text-white">
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


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5">
                        {navoptions}
                    </ul>
                </div>

                <div className="navbar-end flex  gap-5">
                    <div className="relative text-[16px] z-20 -mt-5">
                        <span className=" text-white">{user?.displayName}</span>
                    </div>
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">

                        <div className="w-10 rounded-full flex flex-col justify-center items-center">
                            {user ?
                                <>

                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />

                                </>


                                : <div className='text-3xl'>
                                    <FaRegUserCircle />
                                </div>}

                        </div>
                    </div>
                    {user ?
                        <><button onClick={handleSignOut} className="btn btn-outline">Sign Out</button></>
                        :
                        <><NavLink to={`/login`} className='uppercase font-bold text-xl inter-font'>Sign In</NavLink></>
                    }
                </div>
            </div>

        </div>
    );
};

export default Navbar;
import React from 'react';
import { useContext } from 'react';
import { FaCalendar, FaHome, FaPhone, FaPhoneAlt, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa';
import { FaHouseChimney, FaPhoneVolume } from 'react-icons/fa6';
import AuthContext from '../../../../../Provider/AuthContext';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const UserHome = () => {
    const {user}=useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data: userstat=[]}=useQuery({
        queryKey: [user?.email, 'userstat'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user-stats/${user?.email}`)
            return res.data
        }
    });
    
    return (
        <div>
            <h2 className='text-2xl md:text-5xl  font-bold pt-25 md:pt-15 pb-15'>HI, Welcome Back</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
                <div className="stats shadow">
                    <div className="stat px-24 py-12 flex justify-center items-center gap-4 bg-linear-to-r from-[#BB34F5] to-[#FCDBFF]">
                        <div>
                            <FaWallet className='text-5xl text-white'></FaWallet>
                        </div>
                        <div className='text-white'>

                            <div className="stat-value">89,400</div>
                            <div className="stat-title inter-font text-2xl text-white">Menu</div>

                        </div>

                    </div>

                </div>
                <div className="stats shadow">
                    <div className="stat px-24 py-12 flex justify-center items-center gap-4 bg-linear-to-r from-[#D3A256] to-[#FDE8C0]">
                        <div>
                            <FaHome className='text-5xl text-white'></FaHome>
                        </div>
                        <div className='text-white'>

                            <div className="stat-value">89,400</div>
                            <div className="stat-title inter-font text-2xl text-white">Menu</div>

                        </div>

                    </div>

                </div>
                <div className="stats shadow">
                    <div className="stat px-24 py-12 flex justify-center items-center gap-4 bg-linear-to-r from-[#FE4880] to-[#FECDE9]">
                        <div>

                            <FaPhoneVolume className='text-5xl text-white'></FaPhoneVolume>
                        </div>
                        <div className='text-white'>

                            <div className="stat-value">89,400</div>
                            <div className="stat-title inter-font text-2xl text-white">Menu</div>

                        </div>

                    </div>

                </div>

            </div>
            <div className='pt-15 w-full flex'>
                <div className='w-1/2 bg-[#FFEDD5] flex justify-center items-center h-[450px]'>
                    <div className="avatar">
                        <div className="ring-primary w-38  rounded-full ring-2 ring-offset-2">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </div>
                <div className='w-1/2 bg-[#FEF9C3] h-[450px] py-22 px-25'>
                    <h3 className='text-4xl font-bold mb-8'>Your activities</h3>
                    <div className='flex gap-2 items-center text-2xl text-blue-500'>
                        <FaShoppingCart></FaShoppingCart>
                        <p>Orders: {userstat.orders}</p>
                    </div>
                    <div className='flex gap-2 items-center text-2xl text-green-500'>
                        <FaStar></FaStar>
                        <p>Reviews: 6</p>
                    </div>
                    <div className='flex gap-2 items-center text-2xl text-amber-400'>
                        <FaCalendar></FaCalendar>
                        <p>Bookings: 6</p>
                    </div>
                    <div className='flex gap-2 items-center text-2xl text-orange-500'>
                        <FaWallet></FaWallet>
                        <p>Payment: {userstat.payments}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
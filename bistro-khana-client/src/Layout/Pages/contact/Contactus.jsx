import React from 'react';
import contactCoverImg from '../../../assets/contact/banner.jpg'
import Cover from '../../../components/Cover';
import { Helmet } from 'react-helmet';
import SharedTitle from '../../../components/SharedTitle';
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaPaperPlane }  from "react-icons/fa";


const Contactus = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={contactCoverImg} title={"contact us"} desc={"WOULD YOU LIKE TO TRY A DISH?"}></Cover>
            <div className='max-w-7xl mx-auto'>
                <SharedTitle headline={"our location"} subheadline={"Visit Us"}></SharedTitle>
                {/* location and open info */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-25'>
                    <div className="card bg-base-100 w-96  shadow-sm">
                        <div className='flex justify-center items-center bg-[#D1A054] text-white p-6 text-3xl'>
                            <FaPhoneVolume></FaPhoneVolume>
                        </div>
                        <div className="card-body dark7-bg flex flex-col justify-center items-center mb-7 mx-7">
                            <h2 className="inter-font text-2xl font-medium uppercase mb-2 mt-5">phone</h2>
                            <p className='inter-font text-[16px] dark-2'>+38 (012) 34 56 789</p>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96  shadow-sm">
                        <div className='flex justify-center items-center bg-[#D1A054] text-white p-6 text-3xl'>
                            <FaLocationDot />
                        </div>
                        <div className="card-body dark7-bg flex flex-col justify-center items-center mb-7 mx-7">
                            <h2 className="inter-font text-2xl font-medium uppercase mb-2 mt-5">Address</h2>
                            <p className='inter-font text-[16px] dark-2'>+38 (012) 34 56 789</p>

                        </div>
                    </div>
                    <div className="card bg-base-100 w-96  shadow-sm">
                        <div className='flex justify-center items-center bg-[#D1A054] text-white p-6 text-3xl'>
                            <MdAccessTimeFilled />
                        </div>
                        <div className="card-body dark7-bg flex flex-col justify-center items-center mb-7 mx-7">
                            <h2 className="inter-font text-2xl font-medium uppercase mb-2 mt-5">working hours</h2>
                            <p className='inter-font text-[16px] dark-2'>Mon - Fri: 08:00 - 22:00</p>
                            <p className='inter-font text-[16px] dark-2'>Sat - Sun: 10:00 - 23:00</p>

                        </div>
                    </div>
                </div>
                {/*send message part */}
                <SharedTitle headline={"contact form"} subheadline={"Send Us a Message"}></SharedTitle>
                <div>
                    <div className="bg-base-200 p-24 inter-font mb-100">
                        <form >
                            <div className='flex gap-6'>
                                <div className='w-1/2'>
                                    <label>Name*</label>
                                    <input type="text" name='name' placeholder='Enter you name' className='w-full input mt-4 p-6' />
                                </div>
                                <div className='w-1/2'>
                                    <label>Email*</label>
                                    <input type="email" name='email' placeholder='Enter your email' className='w-full input mt-4 p-6' />
                                </div>

                            </div>
                            <div className='w-full mt-6'>
                                <label>Phone*</label>
                                <input type="number" name='phone' placeholder='Enter your phone number' className='w-full input mt-4 p-6' />
                            </div>
                            <div className='w-full mt-6'>
                                <label>Message*</label>
                                <textarea type="text" name='message' placeholder='Enter your message here'  className='w-full input mt-4 p-6 h-75' />
                            </div>

                            <div className='flex justify-center items-center'>
                                <div className='flex justify-center gap-2 p-5 items-center text-white w-2/12 bg-linear-to-l from-[#B58130] to-[#835D23] mt-28'>
                                <input type="submit" value={"Send Message"} className=' ' />
                                <FaPaperPlane/>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactus;
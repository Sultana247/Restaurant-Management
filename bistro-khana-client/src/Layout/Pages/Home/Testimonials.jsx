import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Testimonials = ({ review }) => {
    const { name, details, rating } = review;
    return (
        <div className=''>
            <div className='flex flex-col justify-center text-center p-12 mx-auto w-full'>
                <div className='flex justify-center mb-10'>
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    readOnly
                />
                </div>
                <div className='mb-10 text-7xl  flex justify-center'>
                    <FaQuoteLeft />
                </div>
                <div>
                    <p className='inter-font text-xl'>{details}</p>
                    <h3 className='inter-font text-3xl font-medium text-[#CD9003] uppercase mt-2 mb-12'>{name}</h3>
                </div>
            </div>

        </div>
    );
};

export default Testimonials;